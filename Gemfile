# A sample Gemfile
source "https://rubygems.org"
require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
# gem "rails"
gem 'yajl-ruby'
gem 'jekyll'
gem 'wdm' if Gem.win_platform? #windows compatibility for  --watch 
gem 'github-pages', versions['github-pages']