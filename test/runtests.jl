using JET
using Test
using ClimaRecursiveApply

@static if @isdefined(var"@test_opt") # v1.7 and higher
    @testset "RecursiveApply optimization test" begin
        for x in [
            1.0,
            1.0f0,
            (1.0, 2.0),
            (1.0f0, 2.0f0),
            (a = 1.0, b = (x1 = 2.0, x2 = 3.0)),
            (a = 1.0f0, b = (x1 = 2.0f0, x2 = 3.0f0)),
        ]
            @test_opt 2 ⊠ x
            @test_opt x ⊞ x
            @test_opt ClimaRecursiveApply.rdiv(x, 3)
        end
    end
end

@testset "RecursiveApply nary ops" begin
    for x in [
        1.0,
        1.0f0,
        (1.0, 2.0),
        (1.0f0, 2.0f0),
        (a = 1.0, b = (x1 = 2.0, x2 = 3.0)),
        (a = 1.0f0, b = (x1 = 2.0f0, x2 = 3.0f0)),
    ]
        FT = eltype(x[1])
        @test ClimaRecursiveApply.rmul(x, one(FT), one(FT), one(FT)) == x
        @test ClimaRecursiveApply.rmul(x, one(FT), x, one(FT)) == ClimaRecursiveApply.rmul(x, x)
        @test ClimaRecursiveApply.radd(x, zero(FT), zero(FT), zero(FT)) == x
        @test ClimaRecursiveApply.radd(x, zero(FT), x, zero(FT)) == ClimaRecursiveApply.rmul(x, FT(2))
    end
end

@testset "Highly nested types" begin
    FT = Float64
    nested_types = [
        FT,
        Tuple{FT, FT},
        NamedTuple{(:ϕ, :ψ), Tuple{FT, FT}},
        Tuple{NamedTuple{(:ϕ, :ψ), Tuple{FT, FT}}, NamedTuple{(:ϕ, :ψ), Tuple{FT, FT}}},
        Tuple{FT, FT},
        NamedTuple{
            (:ρ, :uₕ, :ρe_tot, :ρq_tot, :sgs⁰, :sgsʲs),
            Tuple{
                FT,
                Tuple{FT, FT},
                FT,
                FT,
                NamedTuple{(:ρatke,), Tuple{FT}},
                Tuple{NamedTuple{(:ρa, :ρae_tot, :ρaq_tot), Tuple{FT, FT, FT}}},
            },
        },
        NamedTuple{(:u₃, :sgsʲs), Tuple{Tuple{FT}, Tuple{NamedTuple{(:u₃,), Tuple{Tuple{FT}}}}}},
    ]
    for nt in nested_types
        rz = ClimaRecursiveApply.rmap(ClimaRecursiveApply.rzero, nt)
        @test typeof(rz) == nt
        @inferred ClimaRecursiveApply.rmap(ClimaRecursiveApply.rzero, nt)

        rz = ClimaRecursiveApply.rmap((x, y) -> ClimaRecursiveApply.rzero(x), nt, nt)
        @test typeof(rz) == nt
        @inferred ClimaRecursiveApply.rmap((x, y) -> ClimaRecursiveApply.rzero(x), nt, nt)

        rz = ClimaRecursiveApply.rmaptype(identity, nt)
        @test rz == nt
        @inferred ClimaRecursiveApply.rmaptype(zero, nt)

        rz = ClimaRecursiveApply.rmaptype((x, y) -> identity(x), nt, nt)
        @test rz == nt
        @inferred ClimaRecursiveApply.rmaptype((x, y) -> zero(x), nt, nt)
    end
end
