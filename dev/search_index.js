var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = ClimaRecursiveApply","category":"page"},{"location":"api/","page":"API","title":"API","text":"ClimaRecursiveApply","category":"page"},{"location":"api/#ClimaRecursiveApply.ClimaRecursiveApply","page":"API","title":"ClimaRecursiveApply.ClimaRecursiveApply","text":"ClimaRecursiveApply\n\nThis module contains operators to recurse over nested Tuples or NamedTuples.\n\nTo extend to another type T, define ClimaRecursiveApply.rmap(fn, args::T...)\n\n\n\n\n\n","category":"module"},{"location":"api/#Map","page":"API","title":"Map","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"rmap\nrmaptype","category":"page"},{"location":"api/#ClimaRecursiveApply.rmap","page":"API","title":"ClimaRecursiveApply.rmap","text":"rmap(fn, X...)\n\nRecursively apply fn to each element of X\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaRecursiveApply.rmaptype","page":"API","title":"ClimaRecursiveApply.rmaptype","text":"rmaptype(fn, T)\nrmaptype(fn, T1, T2)\n\nRecursively apply fn to each type parameter of the type T, or to each type parameter of the types T1 and T2, where fn returns a type.\n\n\n\n\n\n","category":"function"},{"location":"api/#Conversions","page":"API","title":"Conversions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"rconvert\nrpromote_type","category":"page"},{"location":"api/#ClimaRecursiveApply.rconvert","page":"API","title":"ClimaRecursiveApply.rconvert","text":"rconvert(T, X)\n\nIdentical to convert(T, X), but with improved type stability for nested types.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaRecursiveApply.rpromote_type","page":"API","title":"ClimaRecursiveApply.rpromote_type","text":"rpromote_type(Ts...)\n\nRecursively apply promote_type to the input types.\n\n\n\n\n\n","category":"function"},{"location":"api/#Math","page":"API","title":"Math","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"rzero\nrmul\nradd\nrsub\nrdiv\nrmuladd\nrmatmul1\nrmatmul2\nrmin\nrmax","category":"page"},{"location":"api/#ClimaRecursiveApply.rzero","page":"API","title":"ClimaRecursiveApply.rzero","text":"rzero(T)\n\nRecursively compute the zero value of type T.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaRecursiveApply.rmul","page":"API","title":"ClimaRecursiveApply.rmul","text":"rmul(X, Y)\nX ⊠ Y\n\nRecursively scale each element of X by Y.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaRecursiveApply.radd","page":"API","title":"ClimaRecursiveApply.radd","text":"radd(X, Y)\nX ⊞ Y\n\nRecursively add elements of X and Y.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaRecursiveApply.rsub","page":"API","title":"ClimaRecursiveApply.rsub","text":"rsub(X, Y)\nX ⊟ Y\n\nRecursively subtract elements of Y from X.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaRecursiveApply.rdiv","page":"API","title":"ClimaRecursiveApply.rdiv","text":"rdiv(X, Y)\n\nRecursively divide each element of X by Y\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaRecursiveApply.rmuladd","page":"API","title":"ClimaRecursiveApply.rmuladd","text":"rmuladd(w, X, Y)\n\nRecursively add elements of w * X + Y.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaRecursiveApply.rmatmul1","page":"API","title":"ClimaRecursiveApply.rmatmul1","text":"rmatmul1(W, S, i, j)\n\nRecursive matrix product along the 1st dimension of S. Equivalent to:\n\nmapreduce(⊠, ⊞, W[i,:], S[:,j])\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaRecursiveApply.rmatmul2","page":"API","title":"ClimaRecursiveApply.rmatmul2","text":"rmatmul2(W, S, i, j)\n\nRecursive matrix product along the 2nd dimension S. Equivalent to:\n\nmapreduce(⊠, ⊞, W[j,:], S[i, :])\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaRecursiveApply.rmin","page":"API","title":"ClimaRecursiveApply.rmin","text":"rmin(x, y)\n\nRecursively apply min\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaRecursiveApply.rmax","page":"API","title":"ClimaRecursiveApply.rmax","text":"rmax(x, y)\n\nRecursively apply max\n\n\n\n\n\n","category":"function"},{"location":"installation/#Installation","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"ClimaRecursiveApply.jl is a Julia registered package, and can be added from the Julia Pkg manager:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"(v1.x) pkg> add ClimaRecursiveApply","category":"page"},{"location":"#ClimaRecursiveApply.jl","page":"Home","title":"ClimaRecursiveApply.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Utilities for recursive-apply operations.","category":"page"}]
}