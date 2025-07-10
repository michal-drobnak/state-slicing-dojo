# DOJO - Reusable State, State Slicing, and Separation of Concerns

Welcome to the DOJO. The goal today is to understand how we can use state features to split the store into small composable pieces.

## Overview

A developer has prepared a very nice store for a library where we can track all of the books the library currently has at the disposal.
After some time, there was a request to add magazines to the store because the library added them to the catalogue, so the developer added them to the store.
Then the library asked us to add a lending feature so it can track which librarian lended which book.

## Problem

We expanded the business and now we serve multiple libraries. We would like to reuse the functionality as much as possible, however some of the new
libraries don't have magazines and some of them don't support lending but the store expects all of these to be available.

## What now?

1. First let's analyze how many responsibilities does our store currently manage?
2. Let's start extracting individual responsibilities to separate store features.
3. Create custom stores per needs of libraries:
   1. A full store which supports every feature
   2. A store which only supports books and lending
   3. A store which only supports books
