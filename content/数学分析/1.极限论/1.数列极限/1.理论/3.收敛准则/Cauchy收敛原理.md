---
{}
---


由 [[基本数列]] 的定义出发，有如下定理

>[!thm] 定理：Cauchy 收敛原理
>数列 $\{{x_{n}}\}$ 收敛的充分必要条件是 $\{{x_{n}}\}$ 是基本数列.


***证明***

必要性：
$$|x_{n}-x_{m}|\leqslant |x_{n}-a|+|x_{m}-a|<\epsilon $$

充分性（用[[数学分析/1.极限论/1.数列极限/1.理论/3.收敛准则/Bolzano-Weierstrass定理]]）：
1. 先证有界
$$\exists \epsilon_{0}=1,\exists N_{0},\forall n>N_{0},|x_{n}-x_{N_{0}+1}|<\epsilon_{0}
$$
$$ M=\max \{{x_{1},x_{2},\dots,x_{N_{0}}},x_{N_{0}+1}+1\}
$$
得到对于一切 $n$ ，成立
$$ |x_{n}|\leqslant M$$
于是一定得到收敛子列 $\{{x_{n_{k}}}\}$，将$|x_{n}-x_{m}|<\epsilon$ 替换成 $|x_{n}-x_{n_{k}}|<\epsilon$，令 $n_{k}\to \infty$ ，于是结论成立.





