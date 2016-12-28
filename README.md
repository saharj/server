Run it via `node`

```
---
host: localhost:3000
swagger: '2.0'
info:
  version: 0.0.0
  title: Upload API
paths:
  /upload:
    post:
      consumes:
        - multipart/form-data
      parameters:
        - name: upload
          in: formData
          required: true
          type: file
      responses:
        200:
          description: OK
```