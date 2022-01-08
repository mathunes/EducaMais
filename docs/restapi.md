# REST API Documentation

Documentation of endpoint to catalog educational resources.

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

> educa-mais.herokuapp.com/author

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

> educa-mais.herokuapp.com/author

Return example:

    [
        {
            "id": 1,
            "email": "author@email.com",
            "name": "Author name",
            "lastName": "Author lastname",
            "affiliation": "Affiliation",
            "orcid": "123456"
        }
    ]

#### GET

Return an author.

> educa-mais.herokuapp.com/author/1

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

> educa-mais.herokuapp.com/author/lastName/Author lastname

Return example:

    [
        {
            "id": 1,
            "email": "author@email.com",
            "name": "Author name",
            "lastName": "Author lastname",
            "affiliation": "Affiliation",
            "orcid": "123456"
        }
    ]

#### PUT

Update an author.

> educa-mais.herokuapp.com/author

Put example to update authors attributes:

	{
		"id": 1,
        "email": "newauthor@email.com",
        "name": "New author name",
        "lastName": "New author lastname",
        "affiliation": "New affiliation",
        "orcid": "12345678"
    }

#### DELETE

Delete a resource.

> educa-mais.herokuapp.com/author/1

Return example:

	{
        "message": "removed author"
	}

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

> educa-mais.herokuapp.com/resource

Post example:

	{
        "title": "Resource title",
        "description": "Resource description",
        "link": "resource.com",
        "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
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

> educa-mais.herokuapp.com/resource

Return example:

    [
        {
            "id": 2,
            "title": "Resource title",
            "description": "Resource description",
            "link": "resource.com",
            "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            "createdAt": "2021-12-21",
            "registeredAt": "2021-12-21",
            "keyWord": [
                "keyword example"
            ],
            "authors": [
                {
                    "id": 1,
                    "email": "author@email.com",
                    "name": "New author name",
                    "lastName": "Author lastname",
                    "affiliation": "Affiliation",
                    "orcid": "123456"
                }
            ]
        }
    ]

#### GET

Return a resource.

> educa-mais.herokuapp.com/resource/2

Return example:

	{
        "id": 2,
        "title": "Resource title",
        "description": "Resource description",
        "link": "resource.com",
        "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        "createdAt": "2021-12-21",
        "registeredAt": "2021-12-21",
        "keyWord": [
            "keyword example"
        ],
        "authors": [
            {
                "id": 1,
                "email": "author@email.com",
                "name": "New author name",
                "lastName": "Author lastname",
                "affiliation": "Affiliation",
                "orcid": "123456"
            }
        ]
    }

#### GET

Return resources by an author.

> educa-mais.herokuapp.com/resource/author/1

Return example:

    [
        {
            "id": 2,
            "title": "Resource title",
            "description": "Resource description",
            "link": "resource.com",
            "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            "createdAt": "2021-12-21",
            "registeredAt": "2021-12-21",
            "keyWord": [
                "keyword example"
            ],
            "authors": [
                {
                    "id": 1,
                    "email": "author@email.com",
                    "name": "New author name",
                    "lastName": "Author lastname",
                    "affiliation": "Affiliation",
                    "orcid": "123456"
                }
            ]
        }
    ]

#### GET

Return resources by a collection.

> educa-mais.herokuapp.com/resource/collection/3

Return example:

    [
        {
            "id": 2,
            "title": "Resource title",
            "description": "Resource description",
            "link": "resource.com",
            "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            "createdAt": "2021-12-21",
            "registeredAt": "2021-12-21",
            "keyWord": [
                "keyword example"
            ],
            "authors": [
                {
                    "id": 1,
                    "email": "author@email.com",
                    "name": "New author name",
                    "lastName": "Author lastname",
                    "affiliation": "Affiliation",
                    "orcid": "123456"
                }
            ]
        }
    ]

#### PUT

Update a resource.

> educa-mais.herokuapp.com/resource

Put example to update resources attributes:

	{
        "id": 2,
        "title": "New resource title",
        "description": "New resource description",
        "link": "newresource.com",
        "image": "S0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        "createdAt": "2021-12-22",
        "registeredAt": "2021-12-22",
        "keyWord": [
            "new keyword example"
        ],
        "authors": [
            {
                "id": 4
            }
        ]
    }

#### DELETE

Delete a resource.

> educa-mais.herokuapp.com/resource/2

Return example:

	{
        "message": "removed resource"
	}

## Event

The Event List represents a cluster of resource entity items.

|Property|Description|
|--|--|
|id|The unique identifier|
|title|The title of event|
|description|The description of event|
|image|The representative image in base64|
|resources|The list of resources|
|startDate|The start date of event|
|endDate|The end date of event|

### Endpoints Event

#### POST

Save an event.

> educa-mais.herokuapp.com/event

Post example:

    {
        "title": "Event title",
        "description": "Event description",
        "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        "resources": [
            {
                "id": 2
            }
        ],
        "startDate": "2022-01-01",
        "endDate": "2022-01-30"
    }

#### GET

Returns a list of all events.

> educa-mais.herokuapp.com/event

Return example:

    [
        {
            "id": 3,
            "title": "Event title",
            "description": "Event description",
            "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            "resources": [
                {
                    "id": 2,
                    "title": "New resource title",
                    "description": "New resource description",
                    "link": "newresource.com",
                    "image": "S0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    "createdAt": "2021-12-22",
                    "registeredAt": "2021-12-22",
                    "keyWord": [
                        "new keyword example"
                    ],
                    "authors": [
                        {
                            "id": 4,
                            "email": "author@email.com",
                            "name": "Author name",
                            "lastName": "Author lastname",
                            "affiliation": "Affiliation",
                            "orcid": "123456"
                        }
                    ]
                }
            ],
            "startDate": "2022-01-01",
            "endDate": "2022-01-30"
        }
    ]

#### GET

Return an event.

> educa-mais.herokuapp.com/event/3

Return example:

    {
        "id": 3,
        "title": "Event title",
        "description": "Event description",
        "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        "resources": [
            {
                "id": 2,
                "title": "New resource title",
                "description": "New resource description",
                "link": "newresource.com",
                "image": "S0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                "createdAt": "2021-12-22",
                "registeredAt": "2021-12-22",
                "keyWord": [
                    "new keyword example"
                ],
                "authors": [
                    {
                        "id": 4,
                        "email": "author@email.com",
                        "name": "Author name",
                        "lastName": "Author lastname",
                        "affiliation": "Affiliation",
                        "orcid": "123456"
                    }
                ]
            }
        ],
        "startDate": "2022-01-01",
        "endDate": "2022-01-30"
    }

#### GET

Return event by period of time.

> educa-mais.herokuapp.com/event/period?startDate=2021-12-01&endDate=2024-12-31

Return example:

    [
        {
            "id": 3,
            "title": "Event title",
            "description": "Event description",
            "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            "resources": [
                {
                    "id": 2,
                    "title": "New resource title",
                    "description": "New resource description",
                    "link": "newresource.com",
                    "image": "S0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    "createdAt": "2021-12-22",
                    "registeredAt": "2021-12-22",
                    "keyWord": [
                        "new keyword example"
                    ],
                    "authors": [
                        {
                            "id": 4,
                            "email": "author@email.com",
                            "name": "Author name",
                            "lastName": "Author lastname",
                            "affiliation": "Affiliation",
                            "orcid": "123456"
                        }
                    ]
                }
            ],
            "startDate": "2022-01-01",
            "endDate": "2022-01-30"
        }
    ]

#### PUT

Update an event.

> educa-mais.herokuapp.com/event

Put example to update events attributes:

	{
		"id": 3,
        "title": "New event title",
        "description": "New event description",
        "image": "S0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        "resources": [
            {
                "id": 5
            }
        ],
        "startDate": "2022-01-02",
        "endDate": "2022-01-29"
    }

#### DELETE

Delete an event.

> educa-mais.herokuapp.com/event/3

Return example:

	{
        "message": "removed event"
	}


## Course

The Course List represents a cluster of resource entity items.

|Property|Description|
|--|--|
|id|The unique identifier|
|title|The title of course|
|description|The description of course|
|image|The representative image in base64|
|resources|The list of resources|
|registerDate|The register date of course|

### Endpoints Course

#### POST

Save a course.

> educa-mais.herokuapp.com/course

Post example:

    {
        "title": "Course title",
        "description": "Course description",
        "registerDate": "2021-12-22",
        "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        "resources": [
            {
                "id": 2
            }
        ]
    }

#### GET

Returns a list of all courses.

> educa-mais.herokuapp.com/course

Return example:

    [
        {
            "id": 8,
            "title": "Course title",
            "description": "Course description",
            "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            "resources": [
                {
                    "id": 2,
                    "title": "New resource title",
                    "description": "New resource description",
                    "link": "newresource.com",
                    "image": "S0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    "createdAt": "2021-12-22",
                    "registeredAt": "2021-12-22",
                    "keyWord": [
                        "new keyword example"
                    ],
                    "authors": [
                        {
                            "id": 4,
                            "email": "author@email.com",
                            "name": "Author name",
                            "lastName": "Author lastname",
                            "affiliation": "Affiliation",
                            "orcid": "123456"
                        }
                    ]
                }
            ],
            "registerDate": "2021-12-22"
        }
    ]

#### GET

Return a course.

> educa-mais.herokuapp.com/course/8

Return example:

    {
        "id": 8,
        "title": "Course title",
        "description": "Course description",
        "image": "R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        "resources": [
            {
                "id": 2,
                "title": "New resource title",
                "description": "New resource description",
                "link": "newresource.com",
                "image": "S0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                "createdAt": "2021-12-22",
                "registeredAt": "2021-12-22",
                "keyWord": [
                    "new keyword example"
                ],
                "authors": [
                    {
                        "id": 4,
                        "email": "author@email.com",
                        "name": "Author name",
                        "lastName": "Author lastname",
                        "affiliation": "Affiliation",
                        "orcid": "123456"
                    }
                ]
            }
        ],
        "registerDate": "2021-12-22"
    }

#### PUT

Update a course.

> educa-mais.herokuapp.com/course

Put example to update courses attributes:

	{
        "id": 8,
        "title": "New course title",
        "description": "New course description",
        "image": "S0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        "registerDate": "2021-12-23",
        "resources": [
            {
                "id": 9
            }
        ]
    }

#### DELETE

Delete a course.

> educa-mais.herokuapp.com/course/8

Return example:

	{
        "message": "removed course"
	}