# REST API Documentation

Documentation of endpoint to catalog educational resources.

# Resource

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

## Endpoints Resource

### POST

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

### GET

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

### GET

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

### GET

Return a resource by author.

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

### GET

Return a resource by collection.

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

### PUT

Update a resource.

> /resource

Put example to update resource's title:

	{
        "id": 1,
	    "title": "New resource title"
	}

### DELETE

Delete a resource.

>/resource/1

Return example:

	{
		"message": "removed resource"
	}
