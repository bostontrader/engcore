# Welcome to engcore

## Introduction

The purpose of **engcore** is to provide a means to create ES2015 representations of fragments of English as well as to provide various utilities for manipulating them.

More particularly:

- The various parts of speech such as words, phrases, and clauses can be represented as a hierarchy of nested objects.  These objects, hereinafter referred to as "part of speech representations" (POSR) are strictly data objects that are amenable to serialization.

- The information stored by a POSR is predominately grammatical configuration. For example, a POSR to describe a noun would contain a base string and configure the noun as singular or plural, possessive, proper, or whatever.  The other POSR work
exactly the same way.

- Given a POSR and its configured grammar, the actual text that should come from it is generated by this software and is not simply stored.

## What you need to know

**engcore** is written using ES2015.  It uses tape for testing. In order to run the test you may want to use babel-node this comes from the babel-cli package.

**engcore** is meant to be a library. The only thing we execute in this package is the test.  **npm test** does that. It uses babel-node which comes from the babel-cli dependency.




