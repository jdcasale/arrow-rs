searchState.loadedDescShard("arrow_select", 0, "Arrow selection kernels\nDefines concat kernel for <code>ArrayRef</code>\nDefines filter kernels\nDefines take kernel for Array\nDefines windowing functions, like <code>shift</code>ing\nConcatenate multiple Array of the same type into a single …\nConcatenates <code>batches</code> together into a single <code>RecordBatch</code>.\nConcatenates arrays using MutableArrayData\nA best effort interner that maintains a fixed number of …\nA type-erased function that compares two array for pointer …\nPerforms a cheap, pointer-based comparison of two byte …\nReturn a mask identifying the values that are referenced …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn a Vec containing for each set index in <code>mask</code>, the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nProvides <code>key_mappings[</code>array_idx<code>][</code>old_key<code>] -&gt; new_key</code>\nCompute <code>get_masked_values</code> for a <code>GenericByteArray</code>\nGiven an array of dictionaries and an optional key mask …\nCapacity controls the number of unique buckets allocated …\nA weak heuristic of whether to merge dictionary values …\nThe new values\nSelect all rows\nIf the filter selects more than this fraction of rows, use …\nFunction that can filter arbitrary arrays\nA builder to construct <code>FilterPredicate</code>\n<code>FilterBytes</code> is created from a source <code>GenericByteArray</code> and …\nA filtering predicate that can be applied to an <code>Array</code>\nAn iterator of <code>usize</code> whose index in <code>BooleanArray</code> is true\nA lazily evaluated iterator of indices\nA precomputed list of indices\nThe iteration strategy used to evaluate <code>FilterPredicate</code>\nSelect no rows\nA precomputed array of ranges\nAn iterator of <code>(usize, usize)</code> each representing an interval\nA lazily evaluated iterator of ranges\nConstruct the final <code>FilterPredicate</code>\nReturns a prepared function optimized to filter multiple …\nNumber of rows being selected based on this <code>FilterPredicate</code>\nThe default <code>IterationStrategy</code> for a filter of length …\nExtends the in-progress array by the indexes in the …\nExtends the in-progress array by the ranges in the …\nFilters an Array, returning elements matching the filter …\nSelects rows from <code>values</code> based on this <code>FilterPredicate</code>\nFilter the packed bitmask <code>buffer</code>, with <code>predicate</code> starting …\n<code>filter</code> implementation for boolean buffers\n<code>filter</code> implementation for byte arrays\nCounts the number of set bits in <code>filter</code>\n<code>filter</code> implementation for dictionaries\nComputes a new null mask for <code>data</code> based on <code>predicate</code>\n<code>filter</code> implementation for primitive arrays\nReturns a new RecordBatch with arrays containing only …\nFilter any supported <code>RunArray</code> based on a <code>FilterPredicate</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the byte offset at <code>idx</code>\nReturns the start and end of the value at index <code>idx</code> along …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new <code>FilterBuilder</code> that can be used to construct a …\nCompute an optimised representation of the provided <code>filter</code> …\nRemove null values by do a bitmask AND operation with null …\nCommon functionality for interleaving arrays\nThe input arrays downcast to T\nReturns the argument unchanged.\nTakes elements by index from a list of <code>Array</code>, creating a …\nFallback implementation of interleave using …\nCalls <code>U::from(self)</code>.\nThe null buffer of the interleaved output\nCopies original array, setting validity bit to false if a …\nOptions that define how <code>take</code> should behave\nTo avoid generating take implementations for every index …\nVerifies that the non-null values of <code>indices</code> are all <code>&lt; len</code>\nPerform bounds check before taking indices from values. If …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nTake elements by index from Array, creating a new Array …\n<code>take</code> implementation for boolean arrays\n<code>take</code> implementation for string arrays\n<code>take</code> implementation for dictionary arrays\n<code>take</code> implementation for <code>FixedSizeListArray</code>\n<code>take</code> implementation for list arrays\n<code>take</code> implementation for all primitive arrays\nTake rows by index from <code>RecordBatch</code> and returns a new …\n<code>take</code> implementation for run arrays\nTakes/filters a fixed size list array’s inner data using …\nTakes/filters a list array’s inner data using the …\nShifts array by defined number of items (to left or right) …\nZip two arrays by some boolean mask. Where the mask …")