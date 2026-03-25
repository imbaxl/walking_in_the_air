---
tags: 数学分析
---


# 1. 介绍

**不存在数列使得函数列收敛到零**在实际中无法操作，因此一般都是利用Heine归结原理的逆否命题，转成函数版本的结论。



# 2. 典型题目
## 2.1. 例题1![[吉米多维奇连续性专题#1.7. 设函数 $f(x)$ 在区间 $(x_0, + infty)$ 上连续并有界。证明：对于任何数 $T$，可求得数列 $x_n to + infty$，使$$ lim_{n to infty} [f(x_n + T) - f(x_n)] = 0.$$]]
## 2.2. 例题分析
1. 设定辅助函数：$g(x)=f(x+T)-f(x)$
2. 先转义结论：$\forall \,T ,\exists \,x_n \to +\infty$，使得 $\lim\limits_{n \to \infty}g(x_{n})= 0.$
3. 反证假设：$\exists \,T_{0}, \textcolor{red}{\forall \,x_{n }\to +\infty}$，使得 $\lim\limits_{n \to \infty} g(x_{n}) \neq 0.$
4. **直觉点**：此时如果 $\lim\limits_{n \to \infty} g(x_{n}) = 0$ 那不就正好是 [[Heine 定理]] 吗？但是不对，因为**不可能又要再反证假设**，实际上更好的做法匹配Heine逆否命题：$$\exists \,T_{0},\textcolor{red}{\exists \, \,x_{n }\to +\infty} \,\,使得 \lim\limits_{n \to \infty} g(x_{n}) \neq 0. $$
5. 自然就有：$\exists \, T,\lim\limits_{x\to +\infty}g(x)\neq 0$，关于数列转成函数的叙述完成，即：
	- 存在无穷大数列使得函数列极限不为零
	- 转为：**函数极限不为零**















