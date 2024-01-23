(function() {var type_impls = {
"arrow_array":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RunArray%3CR%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#80-255\">source</a><a href=\"#impl-RunArray%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>&gt; <a class=\"struct\" href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\">RunArray</a>&lt;R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.logical_len\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#83-89\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/run_array/struct.RunArray.html#tymethod.logical_len\" class=\"fn\">logical_len</a>(run_ends: &amp;<a class=\"struct\" href=\"arrow_array/array/primitive_array/struct.PrimitiveArray.html\" title=\"struct arrow_array::array::primitive_array::PrimitiveArray\">PrimitiveArray</a>&lt;R&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Calculates the logical length of the array encoded\nby the given run_ends array.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_new\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#94-119\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/run_array/struct.RunArray.html#tymethod.try_new\" class=\"fn\">try_new</a>(\n    run_ends: &amp;<a class=\"struct\" href=\"arrow_array/array/primitive_array/struct.PrimitiveArray.html\" title=\"struct arrow_array::array::primitive_array::PrimitiveArray\">PrimitiveArray</a>&lt;R&gt;,\n    values: &amp;dyn <a class=\"trait\" href=\"arrow_array/array/trait.Array.html\" title=\"trait arrow_array::array::Array\">Array</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, ArrowError&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to create RunArray using given run_ends (index where a run ends)\nand the values (value of the run). Returns an error if the given data is not compatible\nwith RunEndEncoded specification.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_ends\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#122-124\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/run_array/struct.RunArray.html#tymethod.run_ends\" class=\"fn\">run_ends</a>(&amp;self) -&gt; &amp;RunEndBuffer&lt;R::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type arrow_array::types::ArrowPrimitiveType::Native\">Native</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a reference to [<code>RunEndBuffer</code>]</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.values\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#130-132\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/run_array/struct.RunArray.html#tymethod.values\" class=\"fn\">values</a>(&amp;self) -&gt; &amp;<a class=\"type\" href=\"arrow_array/array/type.ArrayRef.html\" title=\"type arrow_array::array::ArrayRef\">ArrayRef</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to values array</p>\n<p>Note: any slicing of this <a href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\"><code>RunArray</code></a> array is not applied to the returned array\nand must be handled separately</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_start_physical_index\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#135-137\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/run_array/struct.RunArray.html#tymethod.get_start_physical_index\" class=\"fn\">get_start_physical_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the physical index at which the array slice starts.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_end_physical_index\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#140-142\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/run_array/struct.RunArray.html#tymethod.get_end_physical_index\" class=\"fn\">get_end_physical_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the physical index at which the array slice ends.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.downcast\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#157-163\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/run_array/struct.RunArray.html#tymethod.downcast\" class=\"fn\">downcast</a>&lt;V: 'static&gt;(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"arrow_array/array/run_array/struct.TypedRunArray.html\" title=\"struct arrow_array::array::run_array::TypedRunArray\">TypedRunArray</a>&lt;'_, R, V&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Downcast this <a href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\"><code>RunArray</code></a> to a <a href=\"arrow_array/array/run_array/struct.TypedRunArray.html\" title=\"struct arrow_array::array::run_array::TypedRunArray\"><code>TypedRunArray</code></a></p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>arrow_array::{Array, ArrayAccessor, RunArray, StringArray, types::Int32Type};\n\n<span class=\"kw\">let </span>orig = [<span class=\"prelude-val\">Some</span>(<span class=\"string\">\"a\"</span>), <span class=\"prelude-val\">Some</span>(<span class=\"string\">\"b\"</span>), <span class=\"prelude-val\">None</span>];\n<span class=\"kw\">let </span>run_array = RunArray::&lt;Int32Type&gt;::from_iter(orig);\n<span class=\"kw\">let </span>typed = run_array.downcast::&lt;StringArray&gt;().unwrap();\n<span class=\"macro\">assert_eq!</span>(typed.value(<span class=\"number\">0</span>), <span class=\"string\">\"a\"</span>);\n<span class=\"macro\">assert_eq!</span>(typed.value(<span class=\"number\">1</span>), <span class=\"string\">\"b\"</span>);\n<span class=\"macro\">assert!</span>(typed.values().is_null(<span class=\"number\">2</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_physical_index\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#170-172\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/run_array/struct.RunArray.html#tymethod.get_physical_index\" class=\"fn\">get_physical_index</a>(&amp;self, logical_index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns index to the physical array for the given index to the logical array.\nThis function adjusts the input logical index based on <code>ArrayData::offset</code>\nPerforms a binary search on the run_ends array for the input index.</p>\n<p>The result is arbitrary if <code>logical_index &gt;= self.len()</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_physical_indices\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#182-245\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/run_array/struct.RunArray.html#tymethod.get_physical_indices\" class=\"fn\">get_physical_indices</a>&lt;I&gt;(\n    &amp;self,\n    logical_indices: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[I]</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;, ArrowError&gt;<div class=\"where\">where\n    I: ArrowNativeType,</div></h4></section></summary><div class=\"docblock\"><p>Returns the physical indices of the input logical indices. Returns error if any of the logical\nindex cannot be converted to physical index. The logical indices are sorted and iterated along\nwith run_ends array to find matching physical index. The approach used here was chosen over\nfinding physical index for each logical index using binary search using the function\n<code>get_physical_index</code>. Running benchmarks on both approaches showed that the approach used here\nscaled well for larger inputs.\nSee <a href=\"https://github.com/apache/arrow-rs/pull/3622#issuecomment-1407753727\">https://github.com/apache/arrow-rs/pull/3622#issuecomment-1407753727</a> for more details.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.slice\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#248-254\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/run_array/struct.RunArray.html#tymethod.slice\" class=\"fn\">slice</a>(&amp;self, offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, length: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Returns a zero-copy slice of this array with the indicated offset and length.</p>\n</div></details></div></details>",0,"arrow_array::array::run_array::Int16RunArray","arrow_array::array::run_array::Int32RunArray","arrow_array::array::run_array::Int64RunArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-RunArray%3CR%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#70-78\">source</a><a href=\"#impl-Clone-for-RunArray%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\">RunArray</a>&lt;R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#71-77\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","arrow_array::array::run_array::Int16RunArray","arrow_array::array::run_array::Int32RunArray","arrow_array::array::run_array::Int64RunArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Array-for-RunArray%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#305-388\">source</a><a href=\"#impl-Array-for-RunArray%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>&gt; <a class=\"trait\" href=\"arrow_array/array/trait.Array.html\" title=\"trait arrow_array::array::Array\">Array</a> for <a class=\"struct\" href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\">RunArray</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#306-308\">source</a><a href=\"#method.as_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.as_any\" class=\"fn\">as_any</a>(&amp;self) -&gt; &amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class='docblock'>Returns the array as <a href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\"><code>Any</code></a> so that it can be\ndowncasted to a specific implementation. <a href=\"arrow_array/array/trait.Array.html#tymethod.as_any\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#310-312\">source</a><a href=\"#method.to_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.to_data\" class=\"fn\">to_data</a>(&amp;self) -&gt; ArrayData</h4></section></summary><div class='docblock'>Returns the underlying data of this array</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#314-316\">source</a><a href=\"#method.into_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.into_data\" class=\"fn\">into_data</a>(self) -&gt; ArrayData</h4></section></summary><div class='docblock'>Returns the underlying data of this array <a href=\"arrow_array/array/trait.Array.html#tymethod.into_data\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_type\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#318-320\">source</a><a href=\"#method.data_type\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.data_type\" class=\"fn\">data_type</a>(&amp;self) -&gt; &amp;DataType</h4></section></summary><div class='docblock'>Returns a reference to the [<code>DataType</code>] of this array. <a href=\"arrow_array/array/trait.Array.html#tymethod.data_type\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.slice\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#322-324\">source</a><a href=\"#method.slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.slice\" class=\"fn\">slice</a>(&amp;self, offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, length: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"type\" href=\"arrow_array/array/type.ArrayRef.html\" title=\"type arrow_array::array::ArrayRef\">ArrayRef</a></h4></section></summary><div class='docblock'>Returns a zero-copy slice of this array with the indicated offset and length. <a href=\"arrow_array/array/trait.Array.html#tymethod.slice\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#326-328\">source</a><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the length (i.e., number of elements) of this array. <a href=\"arrow_array/array/trait.Array.html#tymethod.len\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#330-332\">source</a><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether this array is empty. <a href=\"arrow_array/array/trait.Array.html#tymethod.is_empty\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#334-336\">source</a><a href=\"#method.offset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.offset\" class=\"fn\">offset</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the offset into the underlying data used by this array(-slice).\nNote that the underlying data can be shared by many arrays.\nThis defaults to <code>0</code>. <a href=\"arrow_array/array/trait.Array.html#tymethod.offset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.nulls\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#338-340\">source</a><a href=\"#method.nulls\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.nulls\" class=\"fn\">nulls</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;NullBuffer&gt;</h4></section></summary><div class='docblock'>Returns the null buffer of this array if any. <a href=\"arrow_array/array/trait.Array.html#tymethod.nulls\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.logical_nulls\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#342-373\">source</a><a href=\"#method.logical_nulls\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#method.logical_nulls\" class=\"fn\">logical_nulls</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;NullBuffer&gt;</h4></section></summary><div class='docblock'>Returns a potentially computed [<code>NullBuffer</code>] that represent the logical null values of this array, if any. <a href=\"arrow_array/array/trait.Array.html#method.logical_nulls\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_nullable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#375-377\">source</a><a href=\"#method.is_nullable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#method.is_nullable\" class=\"fn\">is_nullable</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns <code>false</code> if the array is guaranteed to not contain any logical nulls <a href=\"arrow_array/array/trait.Array.html#method.is_nullable\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_buffer_memory_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#379-381\">source</a><a href=\"#method.get_buffer_memory_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.get_buffer_memory_size\" class=\"fn\">get_buffer_memory_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the total number of bytes of memory pointed to by this array.\nThe buffers store bytes in the Arrow memory format, and include the data as well as the validity map.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_array_memory_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#383-387\">source</a><a href=\"#method.get_array_memory_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.get_array_memory_size\" class=\"fn\">get_array_memory_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the total number of bytes of memory occupied physically by this array.\nThis value will always be greater than returned by <code>get_buffer_memory_size()</code> and\nincludes the overhead of the data structures that contain the pointers to the various buffers.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_null\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#220-222\">source</a><a href=\"#method.is_null\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#method.is_null\" class=\"fn\">is_null</a>(&amp;self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether the element at <code>index</code> is null according to <a href=\"arrow_array/array/trait.Array.html#tymethod.nulls\" title=\"method arrow_array::array::Array::nulls\"><code>Array::nulls</code></a> <a href=\"arrow_array/array/trait.Array.html#method.is_null\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_valid\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#237-239\">source</a><a href=\"#method.is_valid\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#method.is_valid\" class=\"fn\">is_valid</a>(&amp;self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether the element at <code>index</code> is <em>not</em> null, the\nopposite of <a href=\"arrow_array/array/trait.Array.html#method.is_null\"><code>Self::is_null</code></a>. <a href=\"arrow_array/array/trait.Array.html#method.is_valid\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.null_count\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#256-258\">source</a><a href=\"#method.null_count\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#method.null_count\" class=\"fn\">null_count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the total number of physical null values in this array. <a href=\"arrow_array/array/trait.Array.html#method.null_count\">Read more</a></div></details></div></details>","Array","arrow_array::array::run_array::Int16RunArray","arrow_array::array::run_array::Int32RunArray","arrow_array::array::run_array::Int64RunArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromIterator%3C%26str%3E-for-RunArray%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#444-455\">source</a><a href=\"#impl-FromIterator%3C%26str%3E-for-RunArray%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\">RunArray</a>&lt;T&gt;</h3></section></summary><div class=\"docblock\"><p>Constructs a <code>RunArray</code> from an iterator of strings.</p>\n<h4 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example:</h4>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>arrow_array::{RunArray, PrimitiveArray, StringArray, types::Int16Type};\n\n<span class=\"kw\">let </span>test = <span class=\"macro\">vec!</span>[<span class=\"string\">\"a\"</span>, <span class=\"string\">\"a\"</span>, <span class=\"string\">\"b\"</span>, <span class=\"string\">\"c\"</span>];\n<span class=\"kw\">let </span>array: RunArray&lt;Int16Type&gt; = test.into_iter().collect();\n<span class=\"macro\">assert_eq!</span>(\n    <span class=\"string\">\"RunArray {run_ends: [2, 3, 4], values: StringArray\\n[\\n  \\\"a\\\",\\n  \\\"b\\\",\\n  \\\"c\\\",\\n]}\\n\"</span>,\n    <span class=\"macro\">format!</span>(<span class=\"string\">\"{:?}\"</span>, array)\n);</code></pre></div>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#445-454\">source</a><a href=\"#method.from_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\" class=\"fn\">from_iter</a>&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = &amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;(iter: I) -&gt; Self</h4></section></summary><div class='docblock'>Creates a value from an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\">Read more</a></div></details></div></details>","FromIterator<&'a str>","arrow_array::array::run_array::Int16RunArray","arrow_array::array::run_array::Int32RunArray","arrow_array::array::run_array::Int64RunArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromIterator%3COption%3C%26str%3E%3E-for-RunArray%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#417-428\">source</a><a href=\"#impl-FromIterator%3COption%3C%26str%3E%3E-for-RunArray%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\">RunArray</a>&lt;T&gt;</h3></section></summary><div class=\"docblock\"><p>Constructs a <code>RunArray</code> from an iterator of optional strings.</p>\n<h4 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example:</h4>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>arrow_array::{RunArray, PrimitiveArray, StringArray, types::Int16Type};\n\n<span class=\"kw\">let </span>test = <span class=\"macro\">vec!</span>[<span class=\"string\">\"a\"</span>, <span class=\"string\">\"a\"</span>, <span class=\"string\">\"b\"</span>, <span class=\"string\">\"c\"</span>, <span class=\"string\">\"c\"</span>];\n<span class=\"kw\">let </span>array: RunArray&lt;Int16Type&gt; = test\n    .iter()\n    .map(|<span class=\"kw-2\">&amp;</span>x| <span class=\"kw\">if </span>x == <span class=\"string\">\"b\" </span>{ <span class=\"prelude-val\">None </span>} <span class=\"kw\">else </span>{ <span class=\"prelude-val\">Some</span>(x) })\n    .collect();\n<span class=\"macro\">assert_eq!</span>(\n    <span class=\"string\">\"RunArray {run_ends: [2, 3, 5], values: StringArray\\n[\\n  \\\"a\\\",\\n  null,\\n  \\\"c\\\",\\n]}\\n\"</span>,\n    <span class=\"macro\">format!</span>(<span class=\"string\">\"{:?}\"</span>, array)\n);</code></pre></div>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#418-427\">source</a><a href=\"#method.from_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\" class=\"fn\">from_iter</a>&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;&gt;(iter: I) -&gt; Self</h4></section></summary><div class='docblock'>Creates a value from an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\">Read more</a></div></details></div></details>","FromIterator<Option<&'a str>>","arrow_array::array::run_array::Int16RunArray","arrow_array::array::run_array::Int32RunArray","arrow_array::array::run_array::Int64RunArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CArrayData%3E-for-RunArray%3CR%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#257-283\">source</a><a href=\"#impl-From%3CArrayData%3E-for-RunArray%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ArrayData&gt; for <a class=\"struct\" href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\">RunArray</a>&lt;R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#259-282\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(data: ArrayData) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<ArrayData>","arrow_array::array::run_array::Int16RunArray","arrow_array::array::run_array::Int32RunArray","arrow_array::array::run_array::Int64RunArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RunArray%3CR%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#390-399\">source</a><a href=\"#impl-Debug-for-RunArray%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\">RunArray</a>&lt;R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/run_array.rs.html#391-398\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow_array::array::run_array::Int16RunArray","arrow_array::array::run_array::Int32RunArray","arrow_array::array::run_array::Int64RunArray"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()