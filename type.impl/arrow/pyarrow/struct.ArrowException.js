(function() {var type_impls = {
"arrow":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrowException\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#impl-ArrowException\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_err\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/pyarrow/struct.ArrowException.html#tymethod.new_err\" class=\"fn\">new_err</a>&lt;A&gt;(args: A) -&gt; PyErr<div class=\"where\">where\n    A: PyErrArguments + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</div></h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"https://docs.rs/pyo3/latest/pyo3/struct.PyErr.html\" title=\"PyErr in pyo3\"><code>PyErr</code></a> of this type.</p>\n</div></details></div></details>",0,"arrow::pyarrow::PyArrowException"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrowException\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#impl-ArrowException\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.type_object_raw\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><h4 class=\"code-header\">fn <a href=\"arrow/pyarrow/struct.ArrowException.html#tymethod.type_object_raw\" class=\"fn\">type_object_raw</a>(py: Python&lt;'_&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a>PyTypeObject</h4></section></div></details>",0,"arrow::pyarrow::PyArrowException"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ArrowException\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#impl-Debug-for-ArrowException\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow::pyarrow::PyArrowException"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-ArrowException\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#impl-Deref-for-ArrowException\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = PyAny</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;PyAny</h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","arrow::pyarrow::PyArrowException"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsPyPointer-for-ArrowException\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#impl-AsPyPointer-for-ArrowException\" class=\"anchor\">§</a><h3 class=\"code-header\">impl AsPyPointer for <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ptr\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#method.as_ptr\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">as_ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a>PyObject</h4></section></summary><div class=\"docblock\"><p>Gets the underlying FFI pointer, returns a borrowed pointer.</p>\n</div></details></div></details>","AsPyPointer","arrow::pyarrow::PyArrowException"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3CPyAny%3E-for-ArrowException\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#impl-AsRef%3CPyAny%3E-for-ArrowException\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;PyAny&gt; for <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;PyAny</h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<PyAny>","arrow::pyarrow::PyArrowException"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-ArrowException\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#impl-Display-for-ArrowException\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","arrow::pyarrow::PyArrowException"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Error-for-ArrowException\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#impl-Error-for-ArrowException\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.source\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#method.source\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.source\" class=\"fn\">source</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;(dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + 'static)&gt;</h4></section></summary><div class='docblock'>The lower-level source of this error, if any. <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.source\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.description\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/error.rs.html#110\">source</a></span><a href=\"#method.description\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.description\" class=\"fn\">description</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.42.0: use the Display impl or to_string()</span></div></span><div class='docblock'> <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.description\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cause\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/error.rs.html#120\">source</a></span><a href=\"#method.cause\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.cause\" class=\"fn\">cause</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;</h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.33.0: replaced by Error::source, which can support downcasting</span></div></span></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.provide\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/error.rs.html#184\">source</a><a href=\"#method.provide\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.provide\" class=\"fn\">provide</a>&lt;'a&gt;(&amp;'a self, request: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/error/struct.Request.html\" title=\"struct core::error::Request\">Request</a>&lt;'a&gt;)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>error_generic_member_access</code>)</span></div></span><div class='docblock'>Provides type based access to context intended for error reports. <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.provide\">Read more</a></div></details></div></details>","Error","arrow::pyarrow::PyArrowException"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PyNativeType-for-ArrowException\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#impl-PyNativeType-for-ArrowException\" class=\"anchor\">§</a><h3 class=\"code-header\">impl PyNativeType for <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.py\" class=\"method trait-impl\"><a href=\"#method.py\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">py</a>(&amp;self) -&gt; Python&lt;'_&gt;</h4></section></summary><div class='docblock'>Returns a GIL marker constrained to the lifetime of this type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unchecked_downcast\" class=\"method trait-impl\"><a href=\"#method.unchecked_downcast\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a class=\"fn\">unchecked_downcast</a>(obj: &amp;PyAny) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a></h4></section></summary><div class='docblock'>Cast <code>&amp;PyAny</code> to <code>&amp;Self</code> without no type checking. <a>Read more</a></div></details></div></details>","PyNativeType","arrow::pyarrow::PyArrowException"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ToPyObject-for-ArrowException\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#impl-ToPyObject-for-ArrowException\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ToPyObject for <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_object\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#method.to_object\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">to_object</a>(&amp;self, py: Python&lt;'_&gt;) -&gt; PyObject</h4></section></summary><div class='docblock'>Converts self into a Python object.</div></details></div></details>","ToPyObject","arrow::pyarrow::PyArrowException"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PyTypeInfo-for-ArrowException\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#impl-PyTypeInfo-for-ArrowException\" class=\"anchor\">§</a><h3 class=\"code-header\">impl PyTypeInfo for <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.AsRefTarget\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.AsRefTarget\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">AsRefTarget</a> = <a class=\"struct\" href=\"arrow/pyarrow/struct.ArrowException.html\" title=\"struct arrow::pyarrow::ArrowException\">ArrowException</a></h4></section></summary><div class='docblock'>Utility type to make Py::as_ref work.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.NAME\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#associatedconstant.NAME\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">NAME</a>: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a> = &quot;ArrowException&quot;</h4></section></summary><div class='docblock'>Class name.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.MODULE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#associatedconstant.MODULE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">MODULE</a>: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; = _</h4></section></summary><div class='docblock'>Module name, if any.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_object_raw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow/pyarrow.rs.html#77\">source</a><a href=\"#method.type_object_raw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_object_raw</a>(py: Python&lt;'_&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a>PyTypeObject</h4></section></summary><div class='docblock'>Returns the PyTypeObject instance for this type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_object\" class=\"method trait-impl\"><a href=\"#method.type_object\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_object</a>(py: Python&lt;'_&gt;) -&gt; &amp;PyType</h4></section></summary><div class='docblock'>Returns the safe abstraction over the type object.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_type_of\" class=\"method trait-impl\"><a href=\"#method.is_type_of\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">is_type_of</a>(object: &amp;PyAny) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Checks if <code>object</code> is an instance of this type or a subclass of this type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_exact_type_of\" class=\"method trait-impl\"><a href=\"#method.is_exact_type_of\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">is_exact_type_of</a>(object: &amp;PyAny) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Checks if <code>object</code> is an instance of this type.</div></details></div></details>","PyTypeInfo","arrow::pyarrow::PyArrowException"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()