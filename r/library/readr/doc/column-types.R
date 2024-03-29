## ----include = FALSE----------------------------------------------------------
knitr::opts_chunk$set(
  collapse = TRUE,
  comment = "#>"
)

## ----setup--------------------------------------------------------------------
library(readr)

## -----------------------------------------------------------------------------
tricky_dat <- tibble::tibble(
  x = rep(c("", "2"), c(1000, 1)),
  y = "y"
)
tfile <- tempfile("tricky-column-type-guessing-", fileext = ".csv")
write_csv(tricky_dat, tfile)

## -----------------------------------------------------------------------------
df <- with_edition(1, read_csv(tfile))
tail(df)

## -----------------------------------------------------------------------------
df <- with_edition(1, read_csv(tfile, guess_max = 1001))
tail(df)

## -----------------------------------------------------------------------------
df <- with_edition(1, read_csv(tfile, col_types = list(x = col_double())))
tail(df)

## -----------------------------------------------------------------------------
file.remove(tfile)

