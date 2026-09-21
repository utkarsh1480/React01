What is debouncing: It is Programming techniques to limit the rate at which a function get executed 
 It ensures that a heavy or expensive function will only run after a specific amount of time has passed since the last time it was triggered
setSearch()       → necessary
re-render         → necessary
useEffect()       → small cost
setTimeout()      → small cost
clearTimeout()    → small cost
API request       → expensive
If you're only filtering an existing array Then you probably don't need this useEffect at all. because here there is no api calling
### Why We use here debouncing
```JS
useEffect(() => {
  const timer = setTimeout(() => {
    if (search.trim()) {
      searchAPI(search.trim());
    }
  }, 500);

  return () => clearTimeout(timer);
}, [search]);
```
### Answer is debouncing
```
                    useEffect runs
                         ↓
R ──────────────────── X
Re ─────────────────── X
Rea ────────────────── X
Reac ───────────────── X
React ──────────────── wait 500ms ── API
```

### What is useSearchParams: useSearchParams comes from React Router
It lets React read and modify the query parameters in the browser URL.
/listings : is just the listings page.
/listings?search=iphone means: Listings page, filtered by iphone. 
### The browser considers these part of the URL, so they survive refresh.

const [searchParams, setSearchParams] = useSearchParams();
 we have two things searchParams +setSearchParams
 SearchParams : Used to read Url Parameter
 setSearchParams: use to modift URl parameters
 const search = searchParams.get("search");

 ### How do we decide which API to call

 const params = Object.fromEntries(
  searchParams.entries()
);
/listings?search=iphone&city=Delhi
Then: searchParams.entries()
gives us parameter pairs conceptually like:
[
  ["search", "iphone"],
  ["city", "Delhi"]
]
Then:
Object.fromEntries(...)
converts that into:
{
  search: "iphone",
  city: "Delhi"
}
So now we have a normal JavaScript object.


### While using Socket
socket.handshake.auth.token
But your frontend currently sends no token, so this happens:
Frontend
   ↓
socket.connect()
   ↓
socket.handshake.auth.token = undefined
   ↓
Authentication token is missing ❌

###  Solution 
```JS
npm install cookie

import { verifyAccessToken } from "../utils/jwt.js";
import cookie from "cookie";

async function authenticateSocket(socket, next) {
    try {
        const cookies = cookie.parse(
            socket.handshake.headers.cookie || ""
        );

        const token = cookies.token;

        if (!token) {
            return next(
                new Error("Authentication token is missing")
            );
        }

        const decoded = verifyAccessToken(token);

        console.log("DECODED TOKEN:", decoded);

        socket.userId = decoded.sub;

        next();

    } catch (error) {
        console.log(
            "Socket authentication error:",
            error.message
        );

        return next(
            new Error("Invalid authentication token")
        );
    }
}

export default authenticateSocket;

```
