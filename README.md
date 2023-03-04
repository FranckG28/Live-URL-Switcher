# Live URL Switcher

Manage in real time what URL is displayed on a source page.

![Screenshot 2023-03-04 at 12 34 34](https://user-images.githubusercontent.com/19238963/222897681-88819e6a-8d23-4523-b531-09a7c273d806.png)

For example, this is useful for creating dynamic webviews in a livestream. Add the source page in the scene and the controller page in a panel in your broadcast software.

> Note that this was my first Node.js project and one of my first in javascript. The code might be very messy and contains english and french. However, i've used in in real livestreams for one year without never encountering any problem.

## Two ways of controlling the source

### Controller
Add a set of predefined url and switch between them with a click

<img width="686" alt="image" src="https://user-images.githubusercontent.com/19238963/222897797-76f2351c-6cc0-4dc2-954f-cdc95f21505b.png">

### Paster
Just `Ctrl+V` any pasted URL to render it instantly on the source

<img width="883" alt="image" src="https://user-images.githubusercontent.com/19238963/222897822-cdcb31e4-7b71-4095-97e4-eb1877baf311.png">

## Usage

1. Install dependencies with npm : 
    ```
    npm i
    ```

2. Start the server. Execute `run.bat` on Windows or run the command
    ```
    node app
    ```

3. The app will run on **port 8000**.

    You can have multiples sources/controllers runnings at the same time.
    Just specify the same `id` of your choice in both the admin and viewer URL.

    **Controller URL** (*please read [using controllers](#using-controller)*) : `localhost:8000/url/controller/[id]`

    **Paster controller URL** : `localhost:8000/url/controller/[id]`

    **Source URL** : `localhost:8000/url/paster/[id]`


> Example : `localhost:8000/url/controller/myliveview` will control the url rendered on `localhost:8000/url/source/myliveview`

## Using controller
This step is not required when using the `paster`.

Saved adresses are stored in a `json` file located in `./data/controllers/` directory.
**You need to create this directory  by yourself**

The app doesn't support automatic creation of the controller files, you need to create it manually:

When using a new `id`, create an empty `[id].json` file containing an empty object (`{}`) in it.

Example for id `myliveview`:
> .data/controllers/myliveview.json
```json
{}
```
