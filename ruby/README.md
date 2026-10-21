# Slugify API - Ruby Gem

Slugify converts text into clean, URL-friendly slugs with custom separators and optional lowercase formatting. Pass any raw string to get back the original text and its normalized slug with accents stripped and spaces replaced.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_slugify'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_slugify
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_slugify'

# Initialize the client
client = APIVerve::Slugify::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  text: "Hello World! This is a Test & Example",
  separator: "-",
  lowercase: true
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "Hello World! This is a Test & Example", separator: "-", lowercase: true })
  puts response["data"]
rescue APIVerve::Slugify::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Slugify::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Slugify::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/slugify?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/slugify?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/slugify?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
