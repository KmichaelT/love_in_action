---
'payblocks': patch
---

moving the NEXT_PUBLIC_SERVER_URL generation out of next conf as this is not working reliably on vercel and is not so clean.
Making sure, that the URL works both client and server side. Moving form submission to relative path.
