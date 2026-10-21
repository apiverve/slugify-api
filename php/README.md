# Slugify API - PHP Package

Slugify converts text into clean, URL-friendly slugs with custom separators and optional lowercase formatting. Pass any raw string to get back the original text and its normalized slug with accents stripped and spaces replaced.

## Installation

Install via Composer:

```bash
composer require apiverve/slugify
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Slugify\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'text' => 'Hello World! This is a Test & Example',
    'separator' => '-',
    'lowercase' => true
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Slugify\Client;
use APIVerve\Slugify\Exceptions\APIException;
use APIVerve\Slugify\Exceptions\ValidationException;

try {
    $response = $client->execute(['text' => 'Hello World! This is a Test & Example', 'separator' => '-', 'lowercase' => true]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "original": "Hello World! This is a Test & Example",
    "slug": "hello-world-this-is-a-test-example",
    "separator": "-",
    "lowercase": true,
    "length": 34
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/slugify?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/slugify?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/slugify?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
