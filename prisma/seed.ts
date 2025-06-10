import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.like.deleteMany({});
	await prisma.follower.deleteMany({});
	await prisma.following.deleteMany({});
	await prisma.tweet.deleteMany({});
	await prisma.user.deleteMany({});

	console.log("Seeding database...");

	const user1 = await prisma.user.create({
		data: {
			username: "johndoe",
			email: "john@example.com",
			password: "$2a$10$K8/j2vVEGwQmRmPf.xRWv.uTi0oP.pRW4xWJ9HK9Zl.JCUMkVxgHa", // hashed "password123"
			name: "John Doe",
			bio: "Software developer and tech enthusiast",
			avatar: "https://i.pravatar.cc/150?u=johndoe",
		},
	});

	const user2 = await prisma.user.create({
		data: {
			username: "janedoe",
			email: "jane@example.com",
			password: "$2a$10$K8/j2vVEGwQmRmPf.xRWv.uTi0oP.pRW4xWJ9HK9Zl.JCUMkVxgHa", // hashed "password123"
			name: "Jane Doe",
			bio: "UX designer and coffee lover",
			avatar: "https://i.pravatar.cc/150?u=janedoe",
		},
	});

	const user3 = await prisma.user.create({
		data: {
			username: "bobsmith",
			email: "bob@example.com",
			password: "$2a$10$K8/j2vVEGwQmRmPf.xRWv.uTi0oP.pRW4xWJ9HK9Zl.JCUMkVxgHa", // hashed "password123"
			name: "Bob Smith",
			bio: "Product manager and sports fan",
			avatar: "https://i.pravatar.cc/150?u=bobsmith",
		},
	});

	console.log("Created users");

	const tweet1 = await prisma.tweet.create({
		data: {
			content:
				"Just started learning Remix and it's amazing! #webdev #javascript",
			userId: user1.id,
		},
	});

	const tweet2 = await prisma.tweet.create({
		data: {
			content:
				"Working on a new design system for our product. Excited to share soon!",
			userId: user2.id,
		},
	});

	const tweet3 = await prisma.tweet.create({
		data: {
			content: "Beautiful day for a hike! #nature #outdoors",
			userId: user3.id,
		},
	});

	const tweet4 = await prisma.tweet.create({
		data: {
			content: "Just deployed my first app with Deno Deploy. So fast and easy!",
			userId: user1.id,
		},
	});

	console.log("Created tweets");

	await prisma.like.create({
		data: {
			userId: user2.id,
			tweetId: tweet1.id,
		},
	});

	await prisma.like.create({
		data: {
			userId: user3.id,
			tweetId: tweet1.id,
		},
	});

	await prisma.like.create({
		data: {
			userId: user1.id,
			tweetId: tweet2.id,
		},
	});

	await prisma.like.create({
		data: {
			userId: user1.id,
			tweetId: tweet3.id,
		},
	});

	console.log("Created likes");

	await prisma.follower.create({
		data: {
			userId: user1.id, // User1 has a follower
			followerId: user2.id, // User2 is the follower
		},
	});

	await prisma.following.create({
		data: {
			userId: user2.id, // User2 is following someone
			followingId: user1.id, // User1 is being followed
		},
	});

	await prisma.follower.create({
		data: {
			userId: user1.id, // User1 has a follower
			followerId: user3.id, // User3 is the follower
		},
	});

	await prisma.following.create({
		data: {
			userId: user3.id, // User3 is following someone
			followingId: user1.id, // User1 is being followed
		},
	});

	await prisma.follower.create({
		data: {
			userId: user2.id, // User2 has a follower
			followerId: user1.id, // User1 is the follower
		},
	});

	await prisma.following.create({
		data: {
			userId: user1.id, // User1 is following someone
			followingId: user2.id, // User2 is being followed
		},
	});

	console.log("Created followers and followings");

	console.log("Database seeding completed");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1 as never);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
