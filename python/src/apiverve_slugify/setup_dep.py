from setuptools import setup, find_packages

setup(
    name='apiverve_slugify',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Slugify converts text into clean, URL-friendly slugs with custom separators and optional lowercase formatting. Pass any raw string to get back the original text and its normalized slug with accents stripped and spaces replaced.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/slugify?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
