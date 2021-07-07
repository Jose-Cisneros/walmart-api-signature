# walmart-api-signature
Simple app to get the signature needed for the Walmart API, in node.js

App runs in port 3000


## Request

POST: /walmart-headers

```
{
    "consumer": "YOUR_CONSUMER_ID",
    "private": "YOUR_PRIVATE_KEY"
    version": VERSION_NUMBER_PK
}
```

## Response

```
{
    "timestamp": 1625667497569,
    "signature": "m9R0WtXTiusO3kMebIrJuF1XucaCAMsf9Y9e3VIfBwCfWLgVA......"
}
```
