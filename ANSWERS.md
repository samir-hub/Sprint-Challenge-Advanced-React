- [ ] Why would you use class component over function components (removing hooks from the question)?

If we ignore hooks, class components are more useful because they provide a lot of functionality that function components did not have. This is a moot point now that hooks has brought that functionality to function components, but class components allow us to use the methods that come with React. These methods are the lifecycle hooks. 

- [ ] Name three lifecycle methods and their purposes.

1. Render: purpose is to render our data to the DOM. 
2. componentDidMount: purpose is to set up state data. Therefore it is useful for fetching. 
3. constructor: purpose is to initialize the component with with the initial state data. 

- [ ] What is the purpose of a custom hook?

The purpose of a custom hook is to apply non-visual behavior and stateful logic in our components in a customized way. Since the functionality can be customized for the specific needs of our projects, our code will be more efficient and DRY. 

- [ ] Why is it important to test our apps?

It is important to test our apps because it allows us to build stable and reliable code that is less likely to require expensive maintenance in the future. Moreover, the testing is automated so we spend less time testing manually. 