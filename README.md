# Marriage Profile Showcase (Fun Project)

This is a fun React project to showcase personal profiles for marriage purposes. The project demonstrates the use of a `data/data.json` file to manage and render profile details dynamically.

## Features

- Dynamically rendered profiles using JSON data.
- Interactive and responsive UI.
- Supports personal details, images, and family information.

## Example Data Structure

Here’s a sample `data.json` file:

```json
{
    "personalDetails": {
      "name": "Sandip Kalsait",
      "age": 24,
      "profession": "Software Engineer",
      "location": "Pune, Maharashtra",
      "aboutMe": "A passionate individual who loves to explore new places and cultures.",
      "family": {
        "father": "Navnath Kalsait",
        "mother": "Laxmi Kalsait",
        "siblings": "One younger sister, studying in Pune."
      },
      "interests": ["Traveling", "Cooking", "Reading"],
      "values": "Believes in family values, mutual respect, and love.",
      "lookingFor": "A partner who is kind, supportive, and shares similar values."
    },
    "images": {
      "primary": "https://randomuser.me/api/portraits/men/75.jpg",
      "others": [
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg",
        "https://randomuser.me/api/portraits/men/3.jpg"
      ]
    }
}
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## File Structure

- **`src/`**: Contains all the source code for the React application.
- **`data/`**: Contains the `data.json` file with all the text and bio-data.

## Usage

1. Update the `data/data.json` file with new profile information.
2. Start the server to see the updated profiles.

## Future Enhancements

- Add more interactive elements to profiles.
- Support for multiple languages.
- Enable profile editing from the UI.

## License

This project is for educational and fun purposes. Feel free to use and modify.
