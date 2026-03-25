---
tags: 高等代数
---

# 1. Step1（**不变子空间的直和分解**）
本小节基本上是从 $\lambda-$矩阵 的体系出发，从矩阵语言成立后，解释几何语言的 Jordan 标准型.


设 $V$ 是 $n$ 维复线性空间，$\varphi$ 是 $V$ 上的线性变换。设 $\varphi$ 的初等因子组^[我已经假设初等因子组前面的知识已经成立]为

$$
(\lambda - \lambda_1)^{r_1},\ (\lambda - \lambda_2)^{r_2},\ \cdots,\ (\lambda - \lambda_k)^{r_k},\tag{7.7.1}
$$

定理 7.6.2 ^[和这样复述的一样，因为从这里做逻辑起点，所以有必要回顾 Jordan 标准型的相似逻辑是，任意一个方阵，和他的 Jordan 标准型的初等因子组是一样的，从而和 Jordan 标准型相似]告诉我们，存在 $V$ 的一组基 $\{e_{11}, e_{12}, \cdots, e_{1r_1};\ e_{21}, e_{22}, \cdots, e_{2r_2};\ \cdots;\ e_{k1}, e_{k2}, \cdots, e_{kr_k}\}$，使得 $\varphi$ 在这组基下的表示矩阵为

$$
J = \begin{pmatrix} J_1 & & & \\ & J_2 & & \\ & & \ddots & \\ & & & J_k \end{pmatrix}.
$$

上式中每个 $J_i$ 是相应于初等因子 $(\lambda - \lambda_i)^{r_i}$ 的 Jordan 块，其阶正好为 $r_i$。令 $V_i$ 是由基向量 $e_{i1}, e_{i2}, \cdots, e_{ir_i}$ 生成的子空间，则^[这里已经默认这组基向量对应第i个Jordan块，表示矩阵就是已知的，所以这里是按表示矩阵的定义还原出φ的作用，并且记得要先转置]

$$
\begin{align}  \varphi(e_{i1}) &= \lambda_i e_{i1}, \\ \varphi(e_{i2}) &= e_{i1} + \lambda_i e_{i2}, \\ &\cdots\cdots\cdots\cdots \tag{7.7.2}\\ \varphi(e_{ir_i}) &= e_{i,r_i-1} + \lambda_i e_{ir_i}. \end{align}
$$


这表明 $\varphi(V_i) \subseteq V_i$^[线性变换作用在基向量上都还是回到基向量]，即 $V_i\ (i=1,2,\cdots,k)$ 是 $\varphi$ 的不变子空间。显然^[这个显然来自于直和等价命题4，取到每个子空间的基恰好能拼成全空间的一组基，自然能保证所有基向量线性无关，否则拼不成全空间的一组基。不变子空间的特性对直和证明没有帮助，而只是赋予了这个直和分解的子空间是不变的]我们有

$$
V = V_1 \oplus V_2 \oplus \cdots \oplus V_k.
$$



****
# 2. Step2（**代数重数和几何重数**）


线性变换 $\varphi$ 限制在 $V_1$ 上（仍记为 $\varphi$）便成为 $V_1$ 上的线性变换。这个线性变换在基 $\{e_{11}, e_{12}, \cdots, e_{1r_1}\}$ 下的表示矩阵为

$$
J_1 = 
\begin{pmatrix}
\lambda_1 & 1 & & & \\
& \lambda_1 & 1 & & \\
& & \ddots & \ddots & \\
& & & \ddots & 1 \\
& & & & \lambda_1
\end{pmatrix}.
$$

注意到 $J_1$ 的特征值全为 $\lambda_1$，并且 $\lambda_1 I - J_1$ 的秩等于 $r_1 - 1$，故 $J_1$ 只有一个线性无关的特征向量^[一个Jordan块只有一个线性无关的特征向量，因为dim λI-J=r-1]，不妨选为 $e_{11}$。显然 $e_{11}$ 也是 $\varphi$ 作为 $V$ 上线性变换关于特征值 $\lambda_1$ 的特征向量。不失一般性^[因为同一个特征值可以存在不同幂次的因式，这是初等因子的特性，也就是这个差异导致了代数重数和几何重数可能不同]，不妨设在 $\varphi$ 的初等因子组即 (7.7.1) 式中

$$
\lambda_1 = \lambda_2 = \cdots = \lambda_s,\ \lambda_i \neq \lambda_1\ (i = s+1, \cdots, k),
$$

则 $J_1, \cdots, J_s$ 都以 $\lambda_1$ 为特征值，且相应于每一块有且只有一个线性无关的特征向量。相应的特征向量可取为

$$
e_{11},\ e_{21},\ \cdots,\ e_{s1}, \tag{7.7.3}
$$

显然这是 $s$ 个线性无关的特征向量。如果 $\lambda_i \neq \lambda_1$，则容易看出 $r(\lambda_1 I - J_i) = r_i$，于是

$$
r(\lambda_1 I - J) = \sum_{i=1}^k r(\lambda_1 I - J_i) = (r_1 - 1) + \cdots + (r_s - 1) + r_{s+1} + \cdots + r_k = n - s.
$$

因此 $\varphi$ 关于特征值 $\lambda_1$ 的特征子空间 $V_{\lambda_1}$ 的维数等于 $n - r(\lambda_1 I - J) = s$ ^[]，从而特征子空间 $V_{\lambda_1}$ 以 (7.7.3) 式中的向量为一组基。又 $\lambda_1$ 是 $\varphi$ 的 $r_1 + r_2 + \cdots + r_s$ 重特征值，因此 $\lambda_1$ 的重数与度数之差等于

$$
(r_1 + r_2 + \cdots + r_s) - s.
$$


我们把上述结论写成如下定理。

定理 7.7.1 线性变换 $\varphi$ 的特征值 $\lambda_1$ 的度数等于 $\varphi$ 的 Jordan 标准型中属于特征值 $\lambda_1$ 的 Jordan 块的个数，$\lambda_1$ 的重数等于所有属于特征值 $\lambda_1$ 的 Jordan 块的阶数之和。

****
# 3. Step3（**循环子空间的直和分解**）

下述是说明将空间分解成循环子空间的直和，论述过程尝试用自己的语言组织。

现在再来看 $J_1$ 所对应的子空间 $V_1$，由 (7.7.2) 式中诸等式可知^[移项]

$$(\varphi - \lambda_1 I)(e_{1r_1}) = e_{1r_1-1}  \cdots  (\varphi - \lambda_1 I)(e_{12}) = e_{11}, (\varphi - \lambda_1 I)(e_{11}) = 0,
$$

这个变换 $\psi:=\varphi-\lambda_{1}I$ 的表示矩阵倒着排（这里暂停，用想象还原出表示矩阵）就可以得到一个幂零矩阵，我们说这个变换就是一个幂零线性变换 $\psi$.

循环子空间的要求是用一个线性变换把子空间里一个非零向量生成一组基，比如：
$$
\{{\alpha,\psi(\alpha),\cdots,\psi^{r-1}(\alpha)}\}
$$
那么这个子空间就是**循环子空间**.

因为 Jordan 块都有一个特征向量，用这个特征向量通过循环子空间的样子恰好可以打造一组基，因为 Jordan 块又提供了 $r_{i}-1$ 个单位向量，只要分别作用多次映射就可以打造一组基。因为这里有一组基了，当我们把所有 Jordan 块对应的子空间打造出来的一组基拼在一起，满足直和等价命题4，从而这些循环子空间就是一个直和分解.








