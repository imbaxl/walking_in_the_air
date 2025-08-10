

| 排序 | 内容 |
| ------- | ------- |
|         |         |

本节以铺开拓扑学的基本对象为主，也是数列极限推广到点列极限要做的公理化工作。

****

>[!dfn] 定义1（向量，坐标，向量空间，Euclid 空间）
>记 $\mathbb{R}$ 为实数全体，定义 $n$ 个 $\mathbb{R}$ 的 Descartes 乘积集为
>
>$$
>\mathbb{R}^n = \mathbb{R} \times \mathbb{R} \times \cdots \times \mathbb{R} = \{(x_1, x_2, \cdots, x_n) \mid x_i \in \mathbb{R}, i = 1, 2, \cdots, n\}.
>$$
>
>$\mathbb{R}^n$ 中的元素 $\boldsymbol{x} = (x_1, x_2, \cdots, x_n)$ 称为向量或点，$x_i$ 称为 $x$ 的第 $i$ 个坐标。特别地，$\mathbb{R}^n$ 中的零元素记为 $\boldsymbol{0} = (0, 0, \cdots, 0)$.
>
>设 $\boldsymbol{x} = (x_1, x_2, \cdots, x_n)$, $\boldsymbol{y} = (y_1, y_2, \cdots, y_n)$ 为 $\mathbb{R}^n$ 中任意两个向量，$\lambda$ 为任意实数，定义 $\mathbb{R}^n$ 中的加法和数乘运算：
>
>$$
>\boldsymbol{x} + \boldsymbol{y} = (x_1 + y_1, x_2 + y_2, \cdots, x_n + y_n),
>$$
>$$
>\lambda \boldsymbol{x} = (\lambda x_1, \lambda x_2, \cdots, \lambda x_n).
>$$
>
>$\mathbb{R}^n$ 就成为向量空间。
>
如果再在 $\mathbb{R}^n$ 上引入内积运算
>
>$$
>\langle \boldsymbol{x}, \boldsymbol{y} \rangle = x_1 y_1 + x_2 y_2 + \cdots + x_n y_n = \sum_{k=1}^n x_k y_k,
>$$
>
那么它就被称为 Euclid 空间。
>
>容易验证内积满足以下性质：设 $\boldsymbol{x}$, $\boldsymbol{y}$, $\boldsymbol{z} \in \mathbb{R}^n$, $\lambda$, $\mu \in \mathbb{R}$, 则
(1) 正定性 $\langle \boldsymbol{x}, \boldsymbol{x} \rangle \geqslant 0$, 而 $\langle \boldsymbol{x}, \boldsymbol{x} \rangle = 0$ 当且仅当 $\boldsymbol{x} = 0$;
(2) 对称性 $\langle \boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{y}, \boldsymbol{x} \rangle$;
(3) 线性 $\langle \lambda \boldsymbol{x} + \mu \boldsymbol{y}, \boldsymbol{z} \rangle = \lambda \langle \boldsymbol{x}, \boldsymbol{z} \rangle + \mu \langle \boldsymbol{y}, \boldsymbol{z} \rangle$;
(4) Schwarz 不等式 $\langle \boldsymbol{x}, \boldsymbol{y} \rangle^2 \leqslant \langle \boldsymbol{x}, \boldsymbol{x} \rangle \langle \boldsymbol{y}, \boldsymbol{y} \rangle$.



>[!dfn] 定义2（范数）
>Euclid 空间 $\mathbb{R}^n$ 中任意两点 $\boldsymbol{x} = (x_1, x_2, \cdots, x_n)$ 和 $\boldsymbol{y} = (y_1, y_2, \cdots, y_n)$ 的距离定义为
>
>$$
>|\boldsymbol{x} - \boldsymbol{y}| = \sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2 + \cdots + (x_n - y_n)^2};
>$$
>
>并称
>
>$$
>\|\boldsymbol{x}\| = \sqrt{\langle x, x \rangle} = \sqrt{\sum_{k=1}^n x_k^2}
>$$
为 $\boldsymbol{x}$ 的 Euclid 范数（简称范数）.


>[!thm] 定理3
>范数满足以下性质：
>
>(1) （正定性）$|\boldsymbol{x} - \boldsymbol{y}| \geqslant 0$, 而 $|\boldsymbol{x} - \boldsymbol{y}| = 0$ 当且仅当 $\boldsymbol{x} = \boldsymbol{y}$;
>
>(2) （对称性）$|\boldsymbol{x} - \boldsymbol{y}| = |\boldsymbol{y} - \boldsymbol{x}|$;
>
>(3) （三角不等式）$|\boldsymbol{x} - \boldsymbol{z}| \leqslant |\boldsymbol{x} - \boldsymbol{y}| + |\boldsymbol{y} - \boldsymbol{z}|$.




>[!dfn] 定义4（邻域）
>设 $\boldsymbol{a} = (a_1, a_2, \cdots, a_n) \in \mathbb{R}^n$, $\delta > 0$, 则点集
>$$
>\begin{align}O(\boldsymbol{a}, \delta) &= \{\boldsymbol{x} \in \mathbb{R}^n \mid |x - a| < \delta\} \\ &= \left\{\boldsymbol{x} \in \mathbb{R}^n \middle| \sqrt{(x_1 - a_1)^2 + (x_2 - a_2)^2 + \cdots + (x_n - a_n)^2} < \delta\right\} \end{align}
>$$
>
>称为点 $\boldsymbol{a}$ 的 $\delta$ 邻域，$\boldsymbol{a}$ 称为这个邻域的中心，$\delta$ 称为邻域的半径.



>[!dfn] 定义5（点列极限）
>设 $\boldsymbol{x}$ 是 $R^n$ 中的一个点列，若存在定点 $\boldsymbol{a}\in R^n$，对于任意给定的 $\epsilon>0$，存在正整数 $K$，使得当 $k>K$ 时，
>$$
>|\boldsymbol{x}_{k}-\boldsymbol{a}|<\epsilon 
>$$
>即
 $$\boldsymbol{x}_{k}\in O(\boldsymbol{a},\epsilon) $$
 > 则称点列 $\{{\boldsymbol{x}_{k}}\}$ 收敛于 $\boldsymbol{a}$，记为 $\lim\limits_{k\to \infty}\boldsymbol{x}_{k}=\boldsymbol{a}.$ 而称 $\boldsymbol{a}$ 为点列 $\{{\boldsymbol{x}_{k}}\}$ 的 **极限**.
 



>[!thm] 定理6（点列极限的充要条件）
>$\lim\limits_{k\to \infty}\boldsymbol{x}_{k}=\boldsymbol{a}$ 的充要条件是 $$\lim\limits_{k\to \infty}\boldsymbol{x}_{i}^k=a_{i},(i=1,2,\dots,n)$$
>即点列极限为 $\boldsymbol{a}$ 的充要条件是对于点列 $\boldsymbol{x}$ 的每组分量 $x_{i}^k$ 作成的数列极限都趋于 $a_{i}$，其中 $\boldsymbol{a}=(a_{1},a_{2},\dots,a_{n})$.

<font color="#00b050">证明</font>

根据此不等式，即可证明
$$
\begin{align}
|x_{j}^k-a_{j}|&\leqslant |\boldsymbol{x}-\boldsymbol{a}|\quad (\forall 1\leqslant j\leqslant n) \tag{1}\\
&=\sqrt{ \sum\limits_{i=1}^{n}(x_{i}^k-a_{i})^2 } \tag{2}\\
&\leqslant \sum\limits_{i=1}^{n} |x_{i}^k-a_{i}|\,\tag{3}
\end{align}
$$
必要性：是通过对 (1) 的左侧压缩小于 $\dfrac{\epsilon}{j}$，然后对 $j$ 个分量的数列极限的不等式求和即可成立.
充分性：从 (3) 小于 $\epsilon$，可证明 (1) 的右侧也小于 $\epsilon$.
