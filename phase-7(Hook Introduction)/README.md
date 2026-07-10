# The 7 Core Hooks
-----------------------------------------
    1. useState
    2. useRef
    3. useMemo
    4. useCallback
    5. useContent
    6. useEffect
    7. useReducer

# 1. useState: 
Declares a state variable and a function to update it, which triggers a component re-render when the state changes.
# 2. useRef: 
Persists a mutable value across renders without triggering a re-render. It is commonly used to directly access or interact with DOM elements.
# 3. useMemo: 
Caches (memoizes) the result of an expensive calculation, recalculating it only when its dependencies change.
# 4. useCallback: 
Caches a function definition between renders, ensuring that child components do not unnecessarily re-render.
# 5. useContext: 
Reads and subscribes to a context object, allowing components to share global data (like themes or user info) without prop drilling.
# 6. useEffect: 
Performs side effects such as data fetching, subscriptions, or manually changing the DOM. It runs after the component renders.
# 7. useReducer: 
An alternative to useState that handles complex state logic involving multiple sub-values or state transitions.