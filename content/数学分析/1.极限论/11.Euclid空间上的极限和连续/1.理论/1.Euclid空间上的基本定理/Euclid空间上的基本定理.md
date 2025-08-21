

| 排序      | 内容                              |
| ------- | ------------------------------- |
| 定义1     | 向量，坐标，向量空间，Euclid 空间            |
| 定义2     | 范数                              |
| 定理3     | 范数性质                            |
| 定义4     | 点的邻域                            |
| 定义5     | 点列极限                            |
| 定理6     | 点列极限的充要条件                       |
| 定义7     | 高维点集的有界性                        |
| - - - - | 验证点列极限性质只有：有界性，唯一性，线性性          |
| 定义8     | 内点，内部，外点，开集，闭集，聚点，闭包，边界点，边界，孤立点 |
| 定理9     | 聚点的充要条件                         |
| 例题10    | 说明定义8                           |
| 定理11    | 闭集的充要条件                         |
| 引理12    | De Morgan 公式                    |
| 定理12    | 开集，闭集的 De Morgan 性质             |
| 定理13    | Bolzano-Weierstrass 定理          |
| 推论14    | 有界无限点集至少有一个聚点                   |
| 定义15    | Cauchy 点列                       |
| 定理16    | Cauchy 收敛原理                     |
| 定义17    | 开覆盖，紧集                          |
| 定理18    | Heine-Borel 定理                  |
| 定理19    | 紧集的的等价命题                        |

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
>(1) （正定性）$|\boldsymbol{x} - \boldsymbol{y}| \geqslant 0$, 而 $|\boldsymbol{x} - \boldsymbol{y}| = 0$ 当且仅当 $\boldsymbol{x} = \boldsymbol{y}$，
>
>(2) （对称性）$|\boldsymbol{x} - \boldsymbol{y}| = |\boldsymbol{y} - \boldsymbol{x}|$，
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
>设 $\boldsymbol{x}$ 是 $\mathbb{R}^n$ 中的一个点列，若存在定点 $\boldsymbol{a}\in \mathbb{R}^n$，对于任意给定的 $\epsilon>0$，存在正整数 $K$，使得当 $k>K$ 时，
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

****

至此，我们完成了一个工作：定义多维的数列极限。这需要和数列极限这章对照起来，因为不止要验证一维情形下的性质能否平行推广过来，并且接下来我们会遇到一堆拓扑名词，借助这些概念，我们尝试把实数系基本定理平行推广过来，看看有哪些基本定理是有效的。



>[!dfn] 定义7（高维点集的有界性）
>设 $E$ 是 $\mathbb{R}$ 上的点集，若存在正数 $M$，使得对于任意 $\boldsymbol{x} \in E$，有 
>$$
>\|\boldsymbol{x}\| < M,
>$$
>（或等价地，存在正数 $M$ 使得 $E \subset (-M, M)$），则称 $E$ 为 **有界集**.

定义有界集的意义在于要说明多维情形下的界是什么样的，然后就可以逐一验证：

1. ☑️ 点列极限的唯一性
2. ☑️ 点列极限的有界性
3. ❌ 点列极限的保号性
4. ❌ 点列极限的夹逼性
5. ☑️ 点列极限的线性性



>[!dfn] 定义8（内点，内部，外点，开集，闭集，聚点，闭包，边界点，边界，孤立点）
>存在 $\boldsymbol{x}$ 的一个 $\delta$ 邻域 $O(\boldsymbol{x},\delta)$ 完全落在 $S$ 中（注意：这时 $\boldsymbol{x}$ 必属于 $S$ ），这时称 $\boldsymbol{x}$ 是 $S$ 的 **内点**. $S$ 的内点全体称为 $S$ 的 **内部**，记为
>$$
>S^o
>$$
>存在 $\boldsymbol{x}$ 的一个 $\delta$ 邻域 $O(\boldsymbol{x},\delta)$ 完全不落在 $S$ 中，这时称 $\boldsymbol{x}$ 是 $S$ 的 **外点**.
>
>设 $S$ 是 $\mathbb{R}^n$ 上的点集，若 $S$ 中的每一个点都是它的内点，则称 $S$ 为 **开集**，设 $S$ 是 $\mathbb{R}^n$ 上的点集，若 $S$ 中包含了它的所有的聚点，则称 $S$ 为 **闭集**.
>
>若 $\boldsymbol{x}$ 的任意邻域都含有 $S$ 中的无限个点，则称 $\boldsymbol{x}$ 是 $S$ 的 **聚点**.
>
> $S$ 的聚点的全体记为 
> $$
> S'
> $$
>$S$ 与它的聚点全体 $S'$ 的并集称为 $S$ 的 **闭包**，记为 $\bar{S}.$
>
>
> $\boldsymbol{x}$ 的任意 $\delta$ 邻域既包含 $S$ 中的点，又包含不属于 $S$ 的点，那么就称 $\boldsymbol{x}$ 是 $S$ 的 **边界点**. $S$ 的边界点的全体称为 $S$ 的 **边界**，记为 
> $$
> \partial S
> $$
> 若存在 $x$ 的一个邻域，其中只有 $x$ 点属于 $S$，则称 $x$ 是 $S$ 的 **孤立点**，因此，孤立点一定是边界点.






>[!thm] 定理9（聚点的充要条件）
>设 $\boldsymbol{x}$ 是点集 $S(\subset \mathbb{R}^n)$ 的聚点的充分必要条件是：存在点列 $\{{\boldsymbol{x}_{k}}\}$ 满足 $\boldsymbol{x}_{k}\in S,\boldsymbol{x}_{k}\neq \boldsymbol{x}(k=1,2,\dots)$，使得 $\lim\limits_{k\to \infty}\boldsymbol{x}_{k}=\boldsymbol{x}$

^c27dff


>[!prp] 例题10.1
>在 $\mathbb{R}^2$ 上，设
>
>$$
>S = \{(x, y) \mid 1 \leqslant x^2 + y^2 < 4\},
>$$
>
>那么，
>
>$$
>S^\circ = \{(x, y) \mid 1 < x^2 + y^2 < 4\};
>$$
>
>$$
>\partial S = \{(x, y) \mid x^2 + y^2 = 1\} \cup \{(x, y) \mid x^2 + y^2 = 4\};
>$$
>
>$$
>S' = \{(x, y) \mid 1 \leqslant x^2 + y^2 \leqslant 4\} = \bar{S}.
>$$






>[!prp] 例题10.2
>证明邻域是开集.





>[!thm] 定理11
>$\mathbb{R}^n$ 上的点集 $S$ 为闭集的充分必要条件是 $S^c$（$S$ 的补集）是开集.




>[!lem] 引理12（De Morgan 公式）
>设 $\{S_\alpha\}$ 是 $\mathbb{R}^n$ 中的一组（有限或无限多个）子集，则
>
>$$
>(1)\ \left(\bigcup_\alpha S_\alpha\right)^c = \bigcap_\alpha S_\alpha^c;
>$$
>
>$$
>(2)\ \left(\bigcap_\alpha S_\alpha\right)^c = \bigcup_\alpha S_\alpha^c.
>$$




>[!thm] 定理12
>1. 任意一组开集 $\{S_a\}$ 的并集 $\bigcup\limits_a S_a$ 是开集；  
>2. 任意一组闭集 $\{T_a\}$ 的交集 $\bigcap\limits_\alpha T_a$ 是闭集；  
>3. 任意有限个开集 $S_1, S_2, \cdots, S_k$ 的交集 $\bigcap\limits_{i=1}^k S_i$ 是开集；  
>4. 任意有限个闭集 $T_1, T_2, \cdots, T_k$ 的并集 $\bigcup\limits_{i=1}^k T_i$ 是闭集.



****

接下来是验证实数系基本定理能否推广到多维情形，此处断言以下情形：

1. 闭区间套定理 $\Longrightarrow$ 闭矩形套定理 $\Longrightarrow$ Cantor 闭区域套定理
2. Bolzano-Weierstrass 定理
3. Cauchy 收敛原理
4. Heine-Borel 定理

因此我们可以发现实数系六个定理中，确界原理，单调有界原理均已失效，其余的就可以平行推广.



>[!thm] 定理13（Bolzano-Weierstrass定理）
> $\mathbb{R}^n$ 上的有界点列 $\{{\boldsymbol{x}_{k}}\}$  中必有收敛子列.

^a086ac


>[!cor] 推论14
>$\mathbb{R}^n$ 上的有界无限点集至少有一个聚点.



>[!dfn] 定义15（Cauchy 点列）
>若 $\mathbb{R}^n$ 上的点列 $\{{\boldsymbol{x}_{k}}\}$ 满足：对于任意给定的 $\epsilon>0$，存在正整数 $K$，使得对任意 $k,l>K$，成立 $$|x_{l}-x_{k}|<\epsilon $$则称 $\{{\boldsymbol{x}_{k}}\}$ 为 **基本点列**（或 **Cauchy 点列**）.





>[!thm] 定理16（Cauchy 收敛原理）
>若 $\mathbb{R}^n$ 上的点列 $\boldsymbol{x}_k$ 收敛的充分必要条件是：$\{\boldsymbol{x}_{k}\}$ 为基本点列.



>[!dfn] 定义17（开覆盖，紧集）
>设 $S$ 为 $\mathbb{R}^n$ 上的点集. 如果 $\mathbb{R}^n$ 上的一组开集 $\{{U_{\alpha}}\}$ 满足 $$\displaystyle\bigcup_{\alpha}U_{\alpha} \supset S$$那么称 $\{{U_{\alpha}}\}$ 为 $S$ 的一个 **开覆盖**.
>
>如果 $S$ 的任意一个 [[开覆盖]] $\{{U_{\alpha}}\}$ 中总存在一个有限子覆盖，即存在 $\{{U_{\alpha}}\}$ 中的有限个开集 $\{{U_{\alpha_{i}}}\}_{i=1}^{p}$，满足 $$\displaystyle\bigcup_{i=1}^{p}U_{\alpha_{i}}\supset S $$则称 $S$ 为 **紧集**.




比喻说明：不管给什么样颜色的伞（什么样的开覆盖），总能找到有限个这样颜色的伞能盖住这个点集，那么这个点集就是紧急.


>[!thm] 定理18（Heine-Borel 定理）
>$\mathbb{R}^n$ 上的点集 $S$ 是 [[紧集]] 的充分必要条件是：它是有界闭集.




>[!thm] 定理19（紧集的等价命题）
>设 $S$ 是 $\mathbb{R}^n$ 上的点集，那么以下三个命题等价：
>（1）$S$ 是有界闭集
>（2）$S$ 是紧集
>（3）$S$ 的任一无限子集在 $S$ 中必有聚点.

^483d75



 



