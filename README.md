This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native. 
- npm start

# use the folllowing command for android

- npx react-native run-android

# Step 2: Reason behind the approach taken
• Load gif photos with an infinite scroll from Giphy API
• Provide a search box to search photos by terms

- The approach involves using the React Native FlatList **FlatList** component to efficiently render a scrollable list of GIFs useful especially for long lists, optimizing the user experience.
- **Axios** is used for making asynchronous API calls to the Giphy API, due to its concise code. 
- The component is designed to fetch a batch of 15 GIFs at a time, and more GIFs are loaded when the user scrolls to the end of the list. This lazy loading approach ensures a smooth user experience and minimizes the initial load time. 
- When a user enters a search term and clicks the search button, the onSearch callback is triggered, updating the search term state. The GifList component is then re-rendered with the new search URL, fetching GIFs related to the search term.
- **Bottom Tabs** help create a clear and organized app structure. Users can quickly switch between different features or views, promoting a seamless and straightforward navigation flow.


# Step 3: Assumptions Made

- The search functionality is assumed to **replace** the trending GIFs when a search term is entered, providing a dynamic and interactive user experience also contributing to component reusability avoiding code duplication.
- For the Feedback componnet, the user is navigated back to the Home screen as mentioned "previous screen" in the document, upon clicking the OK button on the Dialogue box.
- Alert has been used instead of toastify library to display a message, due to shortage of time since usage is almost same just presentation and purpose is different.

# Step 4: Total Time

Almost 4 hours

# Step 5: Which solutions relied on googling hints, tips or answers; 

Mostly used React native documentation for the purpose of accurately consuming the components. Looked for the purpose of RefreshControl prop and calling axios and the its set parameters.



