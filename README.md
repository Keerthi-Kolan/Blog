# Share your thoughts Blog

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [json-server](https://www.npmjs.com/package/json-server) (for mock API)

### Step 1: Create a Virtual Environment (Optional)

To isolate dependencies, you may want to create a virtual environment:

#### For Windows (using `venv` in Python):
```sh
python -m venv myenv
myenv\Scripts\activate
```

#### For macOS/Linux:
```sh
python3 -m venv myenv
source myenv/bin/activate
```

### Step 2: Clone the Repository

```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Step 3: Install Dependencies

```sh
npm install
```

### Step 4: Start the Development Server

```sh
npm start
```

This will launch the React app in your default web browser.

### Step 5: Start JSON Server

Start the JSON server with:

```sh
json-server --watch data/db.json --port 5000
```

This will run the mock API server on `http://localhost:5000`.



## Contributing

Feel free to submit issues or pull requests.



