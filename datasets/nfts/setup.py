from setuptools import find_packages, setup

long_description = ""
with open("README.md") as ifp:
    long_description = ifp.read()

setup(
    name="nfts",
    version="0.0.2",
    author="Bugout.dev",
    author_email="engineers@bugout.dev",
    license="Apache License 2.0",
    description="Tools to build, update, and interact with the Moonstream NFTs dataset",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/bugout-dev/moonstream",
    platforms="all",
    classifiers=[
        "Development Status :: 2 - Pre-Alpha",
        "Intended Audience :: Developers",
        "Natural Language :: English",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: Implementation :: CPython",
        "Topic :: Software Development :: Libraries",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    python_requires=">=3.6",
    packages=find_packages(),
    package_data={"nfts": ["py.typed"]},
    zip_safe=False,
    install_requires=[
        "moonstreamdb",
        "humbug",
        "tqdm",
        "web3",
        "requests",
    ],
    extras_require={
        "dev": ["black", "mypy", "types-requests"],
        "distribute": ["setuptools", "twine", "wheel"],
    },
    entry_points={
        "console_scripts": [
            "nfts=nfts.cli:main",
        ]
    },
)
