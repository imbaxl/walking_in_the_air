---
{}
---


# 1. 不等式 sin a / a > sin b / b

>[!prp] 命题：sin a / a > sin b / b
>对 $0<a<b\leqslant \dfrac{\pi}{2}$，成立不等式
>$$
>\dfrac{\sin a}{a}>\dfrac{\sin b}{b}
>$$


*证明：*
该不等式通过 [[微分学基本定理#Cauchy中值定理|Cauchy中值定理]] 证明。
问题的试验空间为构造$\dfrac{f(b)-f(a)}{g(b)-g(a)}$的形式，该不等式形式有两种：
$$
\dfrac{\sin a}{\sin b}和 \frac{\sin a}{a}
$$
后者试过凑不出形式，前者设定$f(x)=\sin x, g(x)=\sin \dfrac{b}{a}x$可以通过Cauchy中值定理的导数结论，凑出$$\dfrac{f(a)-f(0)}{g(a)-g(0)} =\dfrac{\cos \xi}{\dfrac{b}{a}\cos \dfrac{b}{a}\xi}<\dfrac{a}{b}$$
从Cauchy中值定理的应用角度出发，需要考虑：
1. 怎么凑成作差形式
2. 导数结论能给出什么有用的结论

