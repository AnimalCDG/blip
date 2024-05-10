import requests

response = requests.get('https://api.github.com/orgs/takenet/repos')

repositories = response.json()

sorted_repositories = sorted(repositories, key=lambda x: x['created_at'])

formatted_repositories = [{'name': repo['name'], 'created_at': repo['created_at']} for repo in sorted_repositories]