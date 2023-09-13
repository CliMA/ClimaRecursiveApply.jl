using ClimaRecursiveApply, Documenter

pages = Any[
    "Home" => "index.md",
    "Installation" => "installation.md",
    "API" => "api.md",
]

makedocs(
    sitename = "ClimaRecursiveApply.jl",
    strict = true,
    checkdocs = :exports,
    clean = true,
    doctest = true,
    modules = [ClimaRecursiveApply],
    pages = pages,
)

deploydocs(
    repo = "github.com/CliMA/ClimaRecursiveApply.jl.git",
    target = "build",
    push_preview = true,
    devbranch = "main",
    forcepush = true,
)
