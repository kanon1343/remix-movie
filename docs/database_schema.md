# Database Schema ER Diagram

This document provides an Entity-Relationship diagram for the Remix Twitter application database.

## ER Diagram

```mermaid
erDiagram
    User {
        string id PK
        string username
        string email
        string password
        string name
        string bio
        string avatar
        datetime createdAt
        datetime updatedAt
    }
    
    Tweet {
        string id PK
        string content
        string userId FK
        datetime createdAt
        datetime updatedAt
    }
    
    Like {
        string id PK
        string userId FK
        string tweetId FK
        datetime createdAt
    }
    
    Follow {
        string id PK
        string followerId FK
        string followingId FK
        datetime createdAt
    }
    
    User ||--o{ Tweet : "creates"
    User ||--o{ Like : "gives"
    Tweet ||--o{ Like : "receives"
    User ||--o{ Follow : "follows"
    User ||--o{ Follow : "followed by"
```

## Relationships

1. **User to Tweet**: One-to-Many
   - A user can create multiple tweets
   - Each tweet belongs to exactly one user

2. **User to Like**: One-to-Many
   - A user can like multiple tweets
   - Each like is associated with exactly one user

3. **Tweet to Like**: One-to-Many
   - A tweet can receive multiple likes
   - Each like is associated with exactly one tweet

4. **User to Follow (as follower)**: One-to-Many
   - A user can follow multiple users
   - Each follow relationship has exactly one follower

5. **User to Follow (as following)**: One-to-Many
   - A user can be followed by multiple users
   - Each follow relationship has exactly one user being followed

## Constraints

- `User.username` and `User.email` are unique
- `Like` has a unique constraint on the combination of `userId` and `tweetId`
- `Follow` has a unique constraint on the combination of `followerId` and `followingId`
