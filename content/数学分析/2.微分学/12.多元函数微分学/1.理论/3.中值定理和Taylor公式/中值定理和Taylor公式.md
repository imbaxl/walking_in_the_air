


| 排序  | 内容                  |
| --- | ------------------- |
| 定义1 | 凸区域                 |
| 定理2 | 中值定理                |
| 推论3 | 偏导数恒为零即常值函数         |
| 定理4 | $n$ 元中值定理           |
| 定理5 | Taylor 公式           |
| 推论6 | Peano 余项的 Taylor 公式 |
| 例题7 | Taylor 公式的应用        |
| 定理8 | $n$ 元 Taylor 公式     |


**** 

>[!dfn] 定义1（凸区域）
>设 $D \subset \mathbb{R}^n$ 是区域. 若联结 $D$ 中任意两点的线段都完全属于 $D$，即对于任意两点 $\boldsymbol{x}_0, \boldsymbol{x}_1 \in D$ 和一切 $\lambda \in [0,1]$，恒有
>$$
>\boldsymbol{x}_0 + \lambda (\boldsymbol{x}_1 - \boldsymbol{x}_0) \in D,
>$$
则称 $D$ 为 **凸区域**.

不是凸区域的反例就是L字形状，总会有两点穿出外面，所以凸区域想表达的是任意两点都不会穿出外面。



>[!thm] 定理2（中值定理）
>设二元函数 $f(x, y)$ 在凸区域 $D \subset \mathbb{R}^2$ 上可微，则对于 $D$ 内任意两点 $(x_0, y_0)$ 和 $(x_0 + \Delta x, y_0 + \Delta y)$，至少存在一个 $\theta (0 < \theta < 1)$，使得
>$$
>f(x_0 + \Delta x, y_0 + \Delta y) - f(x_0, y_0) = f_x(x_0 + \theta \Delta x, y_0 + \theta \Delta y) \Delta x + f_y(x_0 + \theta \Delta x, y_0 + \theta \Delta y) \Delta y.
>$$

^c59b67

<font color="#9c81ca">分析</font>
1. 表达式左侧是由一元情形的 Lagrange 中值定理得到，$\varphi(1)-\varphi(0)=\varphi'(\theta)$
2. 表达式右侧是由辅助函数经过链式法则得到，$\varphi'(t)=f_{x}(x_{0}+t \Delta x,y_{0}+t \Delta y)\Delta x+f_{y}(x_{0}+t \Delta x,y_{0}+t \Delta y)\Delta y$，将 $t$ 替换成 $\theta$ 即可
3. $\varphi'(t)$ 的 Lagrange 条件由构造的一元函数在二元函数可微的情形下全部满足


>[!cor] 推论3
>如果函数 $f(x, y)$ 在区域 $D \subset \mathbb{R}^2$ 上的偏导数恒为零，那么它在 $D$ 上必是常值函数.


>[!thm] 定理4（n 元中值定理）
>设 $n$ 元函数 $f(x_1, x_2, \cdots, x_n)$ 在凸区域 $D \subset \mathbb{R}^n$ 上可微，则对于 $D$ 内任意两点 $(x_1^0, x_2^0, \cdots, x_n^0)$ 和 $(x_1^0 + \Delta x_1, x_2^0 + \Delta x_2, \cdots, x_n^0 + \Delta x_n)$，至少存在一个 $\theta (0 < \theta < 1)$，使得
>$$
>\begin{align}f(x_1^0 + \Delta x_1, x_2^0 + \Delta x_2, \cdots, x_n^0 + \Delta x_n) - f(x_1^0, x_2^0, \cdots, x_n^0) \\  =\sum_{i=1}^n f_{x_i}(x_1^0 + \theta \Delta x_1, x_2^0 + \theta \Delta x_2, \cdots, x_n^0 + \theta \Delta x_n) \Delta x_i. \\
\end{align}
>$$






>[!thm] 定理5（Taylor 公式）
>设函数 $f(x, y)$ 在点 $(x_0, y_0)$ 的邻域 $U = O((x_0, y_0), r)$ 上具有 $k+1$ 阶连续偏导数，那么对于 $U$ 内每一点 $(x_0 + \Delta x, y_0 + \Delta y)$ 都成立
>$$
>\begin{align}f(x_0 + \Delta x, y_0 + \Delta y) &= f(x_0, y_0) + \left( \Delta x \frac{\partial}{\partial x} + \Delta y \frac{\partial}{\partial y} \right) f(x_0, y_0) + \\ &\frac{1}{2!} \left( \Delta x \frac{\partial}{\partial x} + \Delta y \frac{\partial}{\partial y} \right)^2 f(x_0, y_0) + \cdots + \\ &\frac{1}{k!} \left( \Delta x \frac{\partial}{\partial x} + \Delta y \frac{\partial}{\partial y} \right)^k f(x_0, y_0) + R_k,   \end{align}
>$$
>其中 $R_k = \dfrac{1}{(k+1)!} \left( \Delta x \dfrac{\partial}{\partial x} + \Delta y \dfrac{\partial}{\partial y} \right)^{k+1} f(x_0 + \theta \Delta x, y_0 + \theta \Delta y)$ （$0 < \theta < 1$）称为 Lagrange 余项.


>[!cor] 推论6（Peano 余项的 Taylor 公式）
>设 $f(x, y)$ 在点 $(x_0, y_0)$ 的某个邻域上具有 $k+1$ 阶连续偏导数，那么在点 $(x_0, y_0)$ 附近成立
>$$
>\begin{align} &f(x_0 + \Delta x, y_0 + \Delta y) = f(x_0, y_0) + \left( \Delta x \frac{\partial}{\partial x} + \Delta y \frac{\partial}{\partial y} \right) f(x_0, y_0) +  \\ &\frac{1}{2!} \left( \Delta x \frac{\partial}{\partial x} + \Delta y \frac{\partial}{\partial y} \right)^2 f(x_0, y_0) + \cdots + \\ &\frac{1}{k!} \left( \Delta x \frac{\partial}{\partial x} + \Delta y \frac{\partial}{\partial y} \right)^k f(x_0, y_0) + o\left( (\sqrt{\Delta x^2 + \Delta y^2})^k \right).  \end{align}
>$$



>[!prp] 例题7.1
>近似计算 $(1.08)^{3.96}$.





>[!thm] 定理8（n 元 Taylor 公式）
>设 $n$ 元函数 $f(x_1, x_2, \cdots, x_n)$ 在点 $(x_1^0, x_2^0, \cdots, x_n^0)$ 附近具有 $k+1$ 阶的连续偏导数，那么在这点附近成立如下的 Taylor 公式：
>$$
>\begin{align} &f(x_1^0 + \Delta x_1, x_2^0 + \Delta x_2, \cdots, x_n^0 + \Delta x_n) \\ &= f(x_1^0, x_2^0, \cdots, x_n^0) +
\left( \sum_{i=1}^n \Delta x_i \frac{\partial}{\partial x_i} \right) f(x_1^0, x_2^0, \cdots, x_n^0) +  \\&\frac{1}{2!} \left( \sum_{i=1}^n \Delta x_i \frac{\partial}{\partial x_i} \right)^2 f(x_1^0, x_2^0, \cdots, x_n^0) + \cdots + \\&
\frac{1}{k!} \left( \sum_{i=1}^n \Delta x_i \frac{\partial}{\partial x_i} \right)^k f(x_1^0, x_2^0, \cdots, x_n^0) + R_k, \end{align}
>$$
>其中
>$$
>R_k = \frac{1}{(k+1)!} \left( \sum_{i=1}^n \Delta x_i \frac{\partial}{\partial x_i} \right)^{k+1} f(x_1^0 + \theta \Delta x_1, x_2^0 + \theta \Delta x_2, \cdots, x_n^0 + \theta \Delta x_n), \quad 0 < \theta < 1
>$$
>为 Lagrange 余项.

