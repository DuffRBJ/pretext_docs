var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-1-2",
  "level": "1",
  "url": "root-1-1-2.html",
  "type": "[section]",
  "number": "1",
  "title": "7.0 — Review",
  "body": " 7.0 — Review  A prerequisite for applying a strategy is a knowledge of the basic integration formulas. In the following table we have collected the integrals from our previous list together with several additional formulas that we have learned in this chapter. Most of them should be memorized.   Table of Integration Formulas                                     Constants of integration are omitted.   u-Substitution  The method of u-substitution (or just substitution) is a rule for integrals that is the opposite of the chain rule for derivatives. It is a method for simplifying integrals.  It involves two main steps:   Make simultaneous choices of and .  Rewrite as and compute.   You will be expected to use u-substitution as needed in this course.   Mental Substitution (Linear Inner Functions)         General u-Substitution         "
},
{
  "id": "root-1-1-2-3",
  "level": "2",
  "url": "root-1-1-2.html#root-1-1-2-3",
  "type": "[table]",
  "number": "1.1",
  "title": "",
  "body": " Table of Integration Formulas                                    "
},
{
  "id": "root-1-1-2-4",
  "level": "2",
  "url": "root-1-1-2.html#root-1-1-2-4",
  "type": "[remark]",
  "number": "1.2",
  "title": "",
  "body": "Constants of integration are omitted. "
},
{
  "id": "substitution-6",
  "level": "2",
  "url": "root-1-1-2.html#substitution-6",
  "type": "[example]",
  "number": "1.3",
  "title": "Mental Substitution (Linear Inner Functions).",
  "body": " Mental Substitution (Linear Inner Functions)       "
},
{
  "id": "substitution-7",
  "level": "2",
  "url": "root-1-1-2.html#substitution-7",
  "type": "[example]",
  "number": "1.4",
  "title": "General u-Substitution.",
  "body": " General u-Substitution       "
},
{
  "id": "root-1-1-3",
  "level": "1",
  "url": "root-1-1-3.html",
  "type": "[section]",
  "number": "2",
  "title": "7.1 — Integration by Parts",
  "body": " 7.1 — Integration by Parts  An antiderivative is the opposite of differentiation. To find the opposite of the product rule, we use integration by parts.   If and are differentiable functions, then          LIPET Rule   L ogarithms, I nverse Trig, P olynomials, E xponentials, T rig Functions           "
},
{
  "id": "root-1-1-3-3",
  "level": "2",
  "url": "root-1-1-3.html#root-1-1-3-3",
  "type": "[theorem]",
  "number": "2.1",
  "title": "",
  "body": " If and are differentiable functions, then   "
},
{
  "id": "root-1-1-3-6",
  "level": "2",
  "url": "root-1-1-3.html#root-1-1-3-6",
  "type": "[example]",
  "number": "2.2",
  "title": "",
  "body": "       "
},
{
  "id": "root-1-1-4",
  "level": "1",
  "url": "root-1-1-4.html",
  "type": "[section]",
  "number": "3",
  "title": "7.2 — Trigonometric Integrals",
  "body": " 7.2 — Trigonometric Integrals  Helpful trigonometric identities are listed below.   Trigonometric Identities                  Strategies   Evaluating   If the power of sine is odd , let . Save one factor of for , and convert remaining powers using .  If the power of cosine is odd , let . Save one factor of for , and convert remaining powers using .  If both powers are even , use the identities and .     Evaluating   If the power of tangent is odd , let . Save a factor of for , and rewrite remaining powers using .  If the power of secant is even , let . Save a factor of for , and rewrite remaining powers using .     For powers of only tangent, use .  For powers of only secant, use integration by parts.  If none of the above apply, try rewriting everything in terms of sine and cosine.    Useful Integration Formulas             Examples              "
},
{
  "id": "root-1-1-4-3",
  "level": "2",
  "url": "root-1-1-4.html#root-1-1-4-3",
  "type": "[table]",
  "number": "3.1",
  "title": "",
  "body": " Trigonometric Identities                "
},
{
  "id": "root-1-1-4-4-5",
  "level": "2",
  "url": "root-1-1-4.html#root-1-1-4-4-5",
  "type": "[table]",
  "number": "3.2",
  "title": "",
  "body": " Useful Integration Formulas          "
},
{
  "id": "root-1-1-5",
  "level": "1",
  "url": "root-1-1-5.html",
  "type": "[section]",
  "number": "4",
  "title": "7.3 — Trigonometric Substitution",
  "body": " 7.3 — Trigonometric Substitution  For some stubborn integrals, one can use a substitution technique that is different from ordinary -substitution. Examples include the tangent half-angle substitution and trigonometric substitution . In this section we focus on trigonometric substitution, often called trig sub .  Trigonometric substitution works by replacing a variable with a trigonometric function of a new variable in order to exploit Pythagorean identities such as . For example, if then   Trigonometric substitutions must be one-to-one. As a result, the trigonometric functions used have restricted domains. Only certain substitutions—such as those appearing in the table below— are valid. We will not focus heavily on these restrictions.   Table of Trigonometric Substitutions    Expression  Substitution  Identity Used                           Examples              "
},
{
  "id": "root-1-1-5-5",
  "level": "2",
  "url": "root-1-1-5.html#root-1-1-5-5",
  "type": "[table]",
  "number": "4.1",
  "title": "",
  "body": " Table of Trigonometric Substitutions    Expression  Substitution  Identity Used                         "
},
{
  "id": "root-1-1-6",
  "level": "1",
  "url": "root-1-1-6.html",
  "type": "[section]",
  "number": "5",
  "title": "7.4 — Partial Fractions and Integrating Rational Functions",
  "body": " 7.4 — Partial Fractions and Integrating Rational Functions  Rational functions occur frequently in integration problems, and it is important to know how to approach their integration.    A function is rational if it can be written in the form where and are polynomials.  A rational function is called improper if the degree of is greater than or equal to the degree of . Otherwise, it is called proper .    Examples of rational functions include and   This definition is analogous to the notion of improper fractions such as .   Method of Partial Fractions    Divide if improper. If is improper, divide to obtain where the degree of is less than that of . Apply the remaining steps to the proper fraction .   Factor the denominator. Completely factor into linear factors and irreducible quadratic factors .   Linear factors. For each factor , include    Quadratic factors. For each factor , include      Examples         For each of the following, write the form of the partial fraction decomposition, but do not determine the coefficients.               "
},
{
  "id": "root-1-1-6-3-1",
  "level": "2",
  "url": "root-1-1-6.html#root-1-1-6-3-1",
  "type": "[definition]",
  "number": "5.1",
  "title": "",
  "body": " A function is rational if it can be written in the form where and are polynomials.  A rational function is called improper if the degree of is greater than or equal to the degree of . Otherwise, it is called proper .  "
},
{
  "id": "root-1-1-7",
  "level": "1",
  "url": "root-1-1-7.html",
  "type": "[section]",
  "number": "6",
  "title": "7.5 — Strategies for Integration",
  "body": " 7.5 — Strategies for Integration  In this chapter you have studied several integration techniques that can be used together with the basic integration rules. However, knowing how to use techniques is not enough. You must also know when to use them. Integration is fundamentally a problem of recognition.  Often, a small change in an integrand can require a completely different technique, or even result in a function whose antiderivative is not elementary.   A prerequisite for applying any strategy is fluency with the basic integration formulas. A table of these formulas appears again below for reference.   Table of Integration Formulas                                         Constants of integration are omitted.   Strategy for Integration  If you do not immediately see how to evaluate an integral, the following four-step strategy is often effective.    Simplify the integrand if possible. Algebraic manipulation or trigonometric identities may simplify the integrand and reveal an obvious technique.     Look for an obvious substitution. Try to identify a function whose derivative appears in the integrand, up to a constant multiple.   Classify the integrand by form.    Trigonometric functions. Products of powers of trigonometric functions are handled using the methods of Section 7.2.   Rational functions. Use partial fractions as described in Section 7.4.   Products of algebraic and transcendental functions. Try integration by parts using guidance from Section 7.1.   Radicals.   Use trigonometric substitution for expressions involving .  Use rationalizing substitutions for expressions such as .       Try again. If the first three steps fail, remember that the two fundamental methods are substitution and integration by parts. Manipulating the integrand or combining techniques may be necessary.      Procedures for Fitting Integrands to Basic Rules    Technique  Example    Expand numerator     Separate numerator     Complete the square     Divide improper rational function     Use trigonometric identities      "
},
{
  "id": "root-1-1-7-6",
  "level": "2",
  "url": "root-1-1-7.html#root-1-1-7-6",
  "type": "[table]",
  "number": "6.1",
  "title": "",
  "body": " Table of Integration Formulas                                        "
},
{
  "id": "root-1-1-7-7",
  "level": "2",
  "url": "root-1-1-7.html#root-1-1-7-7",
  "type": "[remark]",
  "number": "6.2",
  "title": "",
  "body": "Constants of integration are omitted. "
},
{
  "id": "root-1-1-7-9",
  "level": "2",
  "url": "root-1-1-7.html#root-1-1-7-9",
  "type": "[table]",
  "number": "6.3",
  "title": "",
  "body": " Procedures for Fitting Integrands to Basic Rules    Technique  Example    Expand numerator     Separate numerator     Complete the square     Divide improper rational function     Use trigonometric identities     "
},
{
  "id": "root-1-1-8",
  "level": "1",
  "url": "root-1-1-8.html",
  "type": "[section]",
  "number": "7",
  "title": "7.8 — Improper Integrals",
  "body": " 7.8 — Improper Integrals  Recall the following theorem.    If is continuous on , or if has only a finite number of jump discontinuities, then is integrable on . That is, the definite integral exists.  Page 375    In this section we extend the concept of the definite integral to cases where the interval is infinite, or where the function has an infinite discontinuity. In either case, the integral is called an improper integral .   Improper Integral with Infinite Interval              Improper Integral of Type 1   If exists for every , then provided this limit exists as a finite number.  If exists for every , then provided this limit exists as a finite number.  If both and are convergent, then    Improper integrals of this type are called convergent if the corresponding limit exists and divergent otherwise.  Page 520     Examples      Interesting Observation                Integrals  The improper integral converges if and diverges if .      Improper Integral Type 2   If is continuous on and discontinuous at , then provided the limit exists.  If is continuous on and discontinuous at , then provided the limit exists.  If has a discontinuity at , where , and both integrals converge, then    The integral is called convergent if the corresponding limits exist, and divergent otherwise.  Page 523        Examples   Calculate and determine whether it is convergent or divergent.           A Comparison Test for Improper Integrals  When it is difficult or impossible to find the exact value of an improper integral, it is often still possible to determine whether it converges or diverges.    Comparison Theorem  Suppose and are continuous functions with for .  If converges, then converges.  If diverges, then diverges.    Page 525    The following figure illustrates the Comparison Theorem.           "
},
{
  "id": "root-1-1-8-3-1",
  "level": "2",
  "url": "root-1-1-8.html#root-1-1-8-3-1",
  "type": "[theorem]",
  "number": "7.1",
  "title": "",
  "body": " If is continuous on , or if has only a finite number of jump discontinuities, then is integrable on . That is, the definite integral exists.  Page 375  "
},
{
  "id": "root-1-1-8-5",
  "level": "2",
  "url": "root-1-1-8.html#root-1-1-8-5",
  "type": "[example]",
  "number": "7.2",
  "title": "Improper Integral with Infinite Interval.",
  "body": " Improper Integral with Infinite Interval           "
},
{
  "id": "root-1-1-8-6-1",
  "level": "2",
  "url": "root-1-1-8.html#root-1-1-8-6-1",
  "type": "[definition]",
  "number": "7.5",
  "title": "Improper Integral of Type 1.",
  "body": " Improper Integral of Type 1   If exists for every , then provided this limit exists as a finite number.  If exists for every , then provided this limit exists as a finite number.  If both and are convergent, then    Improper integrals of this type are called convergent if the corresponding limit exists and divergent otherwise.  Page 520  "
},
{
  "id": "root-1-1-8-7-2-1-2",
  "level": "2",
  "url": "root-1-1-8.html#root-1-1-8-7-2-1-2",
  "type": "[figure]",
  "number": "7.6",
  "title": "",
  "body": " Interesting Observation    "
},
{
  "id": "root-1-1-8-8-1",
  "level": "2",
  "url": "root-1-1-8.html#root-1-1-8-8-1",
  "type": "[theorem]",
  "number": "7.7",
  "title": "Integrals.",
  "body": " Integrals  The improper integral converges if and diverges if .  "
},
{
  "id": "root-1-1-8-9-1",
  "level": "2",
  "url": "root-1-1-8.html#root-1-1-8-9-1",
  "type": "[definition]",
  "number": "7.8",
  "title": "Improper Integral Type 2.",
  "body": " Improper Integral Type 2   If is continuous on and discontinuous at , then provided the limit exists.  If is continuous on and discontinuous at , then provided the limit exists.  If has a discontinuity at , where , and both integrals converge, then    The integral is called convergent if the corresponding limits exist, and divergent otherwise.  Page 523  "
},
{
  "id": "root-1-1-8-10",
  "level": "2",
  "url": "root-1-1-8.html#root-1-1-8-10",
  "type": "[figure]",
  "number": "7.9",
  "title": "",
  "body": "  "
},
{
  "id": "root-1-1-8-12-3-1",
  "level": "2",
  "url": "root-1-1-8.html#root-1-1-8-12-3-1",
  "type": "[theorem]",
  "number": "7.10",
  "title": "Comparison Theorem.",
  "body": " Comparison Theorem  Suppose and are continuous functions with for .  If converges, then converges.  If diverges, then diverges.    Page 525  "
},
{
  "id": "root-1-1-8-12-5",
  "level": "2",
  "url": "root-1-1-8.html#root-1-1-8-12-5",
  "type": "[example]",
  "number": "7.11",
  "title": "",
  "body": "       "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
