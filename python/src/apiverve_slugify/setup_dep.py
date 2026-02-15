from setuptools import setup, find_packages

setup(
    name='apiverve_slugify',
    version='1.1.13',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Slugify is a tool for converting text into URL-friendly slugs. It handles special characters, accents, and spaces to create clean, SEO-friendly URLs.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/slugify?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
