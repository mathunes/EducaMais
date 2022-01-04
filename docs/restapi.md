# REST API Documentation

Documentation of endpoint to catalog educational resources.

## Resource

The Resource List represents all education resource.

|Property|Description|
|--|--|
|id|The unique identifier|
|title|The title of resource|
|description|The description of resource|
|link|The link where the resource is stored|
|image|The representative image in base64|
|createdAt|The creation date|
|registeredAt|The registration date|
|keyWord|The keywords list|
|authors|The authors list|

### Endpoints Resource

#### POST

Save a resource.

> /resource

Post example:

	{
	    "title": "Resource title",
	    "description": "Resource description",
	    "link": "resource.com",
	    "image": "9j4AAQSkZJRgABAQAASABIA...",
	    "createdAt": "2021-12-21",
	    "registeredAt": "2021-12-21",
	    "keyWord": [
            "keyword example"
	    ],
	    "authors": [
            {
                "id": 1
            }
	    ]
	}

#### GET

Returns a list of all resources.

> /resource

Return example:

    [
        {
            "id": 1,
            "title": "Resource title",
            "description": "Resource description",
            "link": "resource.com",
            "image": "9j4AAQSkZJRgABAQAASABIA...",
            "createdAt": "2021-12-21",
            "registeredAt": "2021-12-21",
            "keyWord": [],
            "authors": []
        }
    ]

#### GET

Return a resource.

> /resource/1

Return example:

	{
	    "id": 1,
	    "title": "Resource title",
	    "description": "Resource description",
	    "link": "resource.com",
	    "image": "9j4AAQSkZJRgABAQAASABIA...",
	    "createdAt": "2021-12-21",
	    "registeredAt": "2021-12-21",
	    "keyWord": [],
	    "authors": []
	}

#### GET

Return resources by an author.

> /resource/author/1

Return example:

    [
        {
            "id": 1,
            "title": "Resource title",
            "description": "Resource description",
            "link": "resource.com",
            "image": "9j4AAQSkZJRgABAQAASABIA...",
            "createdAt": "2021-12-21",
            "registeredAt": "2021-12-21",
            "keyWord": [],
            "authors": [
	            {
                    "id": 2,
                    "email": "author@email.com",
                    "name": "Author name",
                    "lastName": "Author lastname",
                    "affiliation": "Affiliation",
                    "orcid": "123456"
	            }
            ]
        }
    ]

#### GET

Return resources by a collection.

> /resource/collection/1

Return example:

    [
        {
            "id": 1,
            "title": "Resource title",
            "description": "Resource description",
            "link": "resource.com",
            "image": "9j4AAQSkZJRgABAQAASABIA...",
            "createdAt": "2021-12-21",
            "registeredAt": "2021-12-21",
            "keyWord": [],
            "authors": [
	            {
                    "id": 2,
                    "email": "author@email.com",
                    "name": "Author name",
                    "lastName": "Author lastname",
                    "affiliation": "Affiliation",
                    "orcid": "123456"
	            }
            ]
        }
    ]

#### PUT

Update a resource.

> /resource

Put example to update resource's title:

	{
        "id": 1,
	    "title": "New resource title"
	}

#### DELETE

Delete a resource.

>/resource/1

Return example:

	{
        "message": "removed resource"
	}

## Author

The Author List represents all authors who have resources.

|Property|Description|
|--|--|
|id|The unique identifier|
|email|The email of author|
|name|The name of author|
|lastName|The lastname of author|
|affiliation|The affiliation of author|
|orcid|The orcid of author|

### Endpoints Author

#### POST

Save an author.

> /author

Post example:

    {
        "email": "author@email.com",
        "name": "Author name",
        "lastName": "Author lastname",
        "affiliation": "Affiliation",
        "orcid": "123456"
    }

#### GET

Returns a list of all authors.

> /author

Return example:

    [
        {
            "id": 2,
            "email": "author@email.com",
            "name": "Author name",
            "lastName": "Author lastname",
            "affiliation": "Affiliation",
            "orcid": "123456"
        }
    ]

#### GET

Return an author.

> /author/1

Return example:

    {
        "id": 2,
        "email": "author@email.com",
        "name": "Author name",
        "lastName": "Author lastname",
        "affiliation": "Affiliation",
        "orcid": "123456"
    }

#### GET

Return authors by a lastname.

> /author/lastName/silva

Return example:

    [
        {
            "id": 2,
            "email": "author@email.com",
            "name": "Author name",
            "lastName": "Silva",
            "affiliation": "Affiliation",
            "orcid": "123456"
        }
    ]

#### PUT

Update an author.

> /author

Put example to update author's name:

	{
        "id": 1,
	    "name": "New author"
	}

#### DELETE

Delete a resource.

>/author/1

Return example:

	{
        "message": "removed author"
	}