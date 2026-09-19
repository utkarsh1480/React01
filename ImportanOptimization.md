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

