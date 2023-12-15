# API Documentation

## BASE URL

- **BASE URL:** `https://data-save-lzp2.onrender.com/api`

## Endpoints
### Create a New User
- **Endpoint:** POST /users
- **Description:** Create a new user with the specified information.
### Request Body:
- `name` (String, required): Name of the user.
- `sectors` (String, required): User's selected sector from predefined options.
- `agreeToTerms` (Boolean, required): Indicates whether the user agrees to terms.

- **Request Body:**

  ```json
  {
   "name": "John Doe",
  "sectors": "Manufacturing",
  "agreeToTerms": true
  }
  ```

-  **Response:**
  
  ```json
  {
    "userId": "7af72b03-51f9-4f63-b379-37a1143d7e28",
    "name": "John Doe",
    "sectors": "Manufacturing",
    "agreeToTerms": true
  }
  ```

