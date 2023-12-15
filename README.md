# API Documentation

## BASE URL

- **BASE URL:** `https://data-save-lzp2.onrender.com/api`

## Endpoints
### Create a New User
- **Endpoint:** `POST /users`
- **Description:** Create a new user with the specified information.
### Request Body:
- `name` (String, required): Name of the user.
- `sectors` (String, required): User's selected sector from predefined options.
- `agreeToTerms` (Boolean, required): Indicates whether the user agrees to terms.

- **Request Body:**

  ```json
  {
    "name": "John Doe",
    "sectors": ["Manufacturing", "Electronic and Optics"],
    "agreeToTerms": true
  }

  ```

-  **Response:**
  
  ```json
  {
      "name": "John Doe",
      "sectors": [
          "Manufacturing",
          "Electronic and Optics"
      ],
      "numberOfSelectedSectors": 2,
      "agreeToTerms": true,
      "_id": "657c547c676713b83240f226",
      "userId": "a0b13313-7e79-4f06-8c29-fd86e5edd0c6",
      "__v": 0
  }
  ```
### Get User by ID
- **Endpoint:** `GET /users/:userId`
- **Description:**  Retrieve information about a user based on their unique identifier (`userId`).

 **Request:**


GET `/api/users/a0b13313-7e79-4f06-8c29-fd86e5edd0c6`


-  **Response:**
  
  ```json
  {
    "userId": "7af72b03-51f9-4f63-b379-37a1143d7e28",
    "name": "John Doe",
    "sectors": "Manufacturing",
    "agreeToTerms": true
  }
```

### Update User by ID
- **Endpoint:** `PUT /users/:userId`
- **Description:**  Update information about a user based on their unique identifier `(userId)`.

### Request Body:
- `name` (String, required): Name of the user.
- `sectors` (String, required): User's selected sector from predefined options.
- `agreeToTerms` (Boolean, required): Indicates whether the user agrees to terms.

- **Request Body:**

  ```json
  {
    "name": "Johnny SMIGGLES",
    "sectors": ["Manufacturing", "Beverage"],
    "agreeToTerms": true
  }

  ```

-  **Response:**
  
  ```json
  {
      "_id": "657c547c676713b83240f226",
      "name": "Johnny SMIGGLES",
      "sectors": [
          "Manufacturing",
          "Beverage"
      ],
      "numberOfSelectedSectors": 2,
      "agreeToTerms": true,
      "userId": "a0b13313-7e79-4f06-8c29-fd86e5edd0c6",
      "__v": 0
  }
  ```