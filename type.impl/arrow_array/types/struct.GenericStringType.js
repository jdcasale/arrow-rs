(function() {var type_impls = {
"arrow_array":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ByteArrayType-for-GenericStringType%3CO%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/types.rs.html#1472-1506\">source</a><a href=\"#impl-ByteArrayType-for-GenericStringType%3CO%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a> for <a class=\"struct\" href=\"arrow_array/types/struct.GenericStringType.html\" title=\"struct arrow_array::types::GenericStringType\">GenericStringType</a>&lt;O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Offset\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Offset\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Offset\" class=\"associatedtype\">Offset</a> = O</h4></section></summary><div class='docblock'>Type of offset i.e i32/i64</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Native\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Native\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" class=\"associatedtype\">Native</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>Type for representing its equivalent rust type i.e\nUtf8Array will have native type has &amp;str\nBinaryArray will have type as <a href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\" title=\"primitive u8\">u8</a></div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.PREFIX\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/types.rs.html#1475\">source</a><a href=\"#associatedconstant.PREFIX\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"arrow_array/types/trait.ByteArrayType.html#associatedconstant.PREFIX\" class=\"constant\">PREFIX</a>: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a> = &quot;String&quot;</h4></section></summary><div class='docblock'>“Binary” or “String”, for use in error messages</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.DATA_TYPE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/types.rs.html#1477-1481\">source</a><a href=\"#associatedconstant.DATA_TYPE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"arrow_array/types/trait.ByteArrayType.html#associatedconstant.DATA_TYPE\" class=\"constant\">DATA_TYPE</a>: DataType = _</h4></section></summary><div class='docblock'>Datatype of array elements</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/types.rs.html#1483-1505\">source</a><a href=\"#method.validate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/types/trait.ByteArrayType.html#tymethod.validate\" class=\"fn\">validate</a>(\n    offsets: &amp;OffsetBuffer&lt;Self::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Offset\" title=\"type arrow_array::types::ByteArrayType::Offset\">Offset</a>&gt;,\n    values: &amp;Buffer\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, ArrowError&gt;</h4></section></summary><div class='docblock'>Verifies that every consecutive pair of <code>offsets</code> denotes a valid slice of <code>values</code></div></details></div></details>","ByteArrayType","arrow_array::types::Utf8Type","arrow_array::types::LargeUtf8Type"],["<section id=\"impl-ByteArrayTypeSealed-for-GenericStringType%3CO%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/types.rs.html#1421\">source</a><a href=\"#impl-ByteArrayTypeSealed-for-GenericStringType%3CO%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"arrow_array/types/bytes/trait.ByteArrayTypeSealed.html\" title=\"trait arrow_array::types::bytes::ByteArrayTypeSealed\">ByteArrayTypeSealed</a> for <a class=\"struct\" href=\"arrow_array/types/struct.GenericStringType.html\" title=\"struct arrow_array::types::GenericStringType\">GenericStringType</a>&lt;O&gt;</h3></section>","ByteArrayTypeSealed","arrow_array::types::Utf8Type","arrow_array::types::LargeUtf8Type"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()