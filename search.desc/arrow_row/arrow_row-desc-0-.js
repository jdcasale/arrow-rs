searchState.loadedDescShard("arrow_row", 0, "A comparable row-oriented representation of a collection …\nA row converter for the dictionary values and the encoding …\nThe encoding of the child array and the encoding of a null …\nA row converter for the child field\nThe row encoding of the child array\nOwned version of a <code>Row</code> that can be moved/cloned freely.\nA comparable representation of a row.\nThe config of a given set of <code>Row</code>\nConverts <code>ArrayRef</code> columns into a row-oriented format.\nA <code>RowParser</code> can be created from a <code>RowConverter</code> and used to …\nA row-oriented representation of arrow data, that is …\nAn iterator over <code>Rows</code>\nConfigure the data type and sort order for a given column\nNo additional codec state is necessary\nNo additional encoder state is necessary\nA row converter for the child fields and the encoding of a …\nThe row encoding of the child arrays and the encoding of a …\nConvert <code>ArrayRef</code> columns appending to an existing <code>Rows</code>\nUnderlying row bytes\nSets the length of this <code>Rows</code> to 0\nState for codecs\nThe config for these rows\nConvert <code>ArrayRef</code> columns into <code>Rows</code>\nConvert raw bytes into <code>ArrayRef</code>\nConvert <code>Rows</code> columns into <code>ArrayRef</code>\nData type\nDecodes a the provided <code>field</code> from <code>rows</code>\nReturns an empty <code>Rows</code> with capacity for <code>row_capacity</code> rows …\nEncodes a column to the provided <code>Rows</code> incrementing the …\nEncode dictionary values not preserving the dictionary …\nThe schema for these rows\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an iterator over the <code>Row</code> in this <code>Rows</code>\nCreate a new <code>RowConverter</code> with the provided schema\nCreate a new column with the given data type\nCreate a new column with the given data type and …\nReturns the null sentinel, negated if <code>invert</code> is true\nReturns the number of <code>Row</code> in this <code>Rows</code>\nRow <code>i</code> has data <code>&amp;buffer[offsets[i]..offsets[i+1]]</code>\nSort options\nCreate owned version of the row to detach it from the …\nCreates a <code>Row</code> from the provided <code>bytes</code>.\nReturns a <code>RowParser</code> that can be used to parse <code>Row</code> from …\nAppend a <code>Row</code> to this <code>Rows</code>\nReturns the row at index <code>row</code>\nGet borrowed <code>Row</code> from owned version.\nComputes the length of each encoded <code>Rows</code> and returns an …\nReturns the size of this instance in bytes\nReturn size of this instance in bytes.\nReturns the size of this instance in bytes\nCheck if the given fields are supported by the row format.\nWhether to run UTF-8 validation when converting to arrow …\nEncodes a value of a particular fixed width type into …\nDecodes a <code>BooleanArray</code> from rows\nDecodes a <code>ArrayData</code> from rows based on the provided …\nDecodes a <code>FixedLengthBinary</code> from rows\nDecodes a single byte from each row, interpreting <code>0x01</code> as …\nDecodes a <code>PrimitiveArray</code> from rows\nFixed width types are encoded as\nReturns the total encoded length (including null byte) for …\nSplits <code>len</code> bytes from <code>src</code>\nDecodes a string array from <code>rows</code> with the provided <code>options</code>\nEncodes the provided <code>GenericListArray</code> to <code>out</code> with the …\nThe continuation token\nThe block size of the variable length encoding\nIndicates an empty string\nThe first block is split into <code>MINI_BLOCK_COUNT</code> mini-blocks\nThe mini block size\nIndicates a non-empty string\nDecodes a binary array from <code>rows</code> with the provided <code>options</code>\nDecodes a string array from <code>rows</code> with the provided <code>options</code>\nReturns the number of bytes of encoded data\nVariable length values are encoded as\nWrites <code>val</code> in <code>SIZE</code> blocks with the appropriate …\nReturns the length of the encoded representation of a byte …\nReturns the padded length of the encoded length of the …")