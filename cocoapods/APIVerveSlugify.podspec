Pod::Spec.new do |s|
  s.name             = 'APIVerveSlugify'
  s.version          = '1.2.3'
  s.summary          = 'Slugify converts text into clean, URL-friendly slugs with custom separators and optional lowercase formatting.'
  s.description      = <<-'DESC'
Slugify converts text into clean, URL-friendly slugs with custom separators and optional lowercase formatting. Pass any raw string to get back the original text and its normalized slug with accents stripped and spaces replaced.

This iOS/macOS SDK provides a convenient way to access the Slugify from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/slugify?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/slugify-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveSlugify/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
