(function() {
    var type_impls = Object.fromEntries([["of",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-FdtNode%3C'b,+'a%3E\" class=\"impl\"><a href=\"#impl-Clone-for-FdtNode%3C'b,+'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'b, 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for FdtNode&lt;'b, 'a&gt;<div class=\"where\">where\n    'a: 'b,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; FdtNode&lt;'b, 'a&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","of::OfNode"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-FdtNode%3C'b,+'a%3E\" class=\"impl\"><a href=\"#impl-Debug-for-FdtNode%3C'b,+'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'b, 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for FdtNode&lt;'b, 'a&gt;<div class=\"where\">where\n    'a: 'b,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","of::OfNode"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FdtNode%3C'b,+'a%3E\" class=\"impl\"><a href=\"#impl-FdtNode%3C'b,+'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'b, 'a&gt; FdtNode&lt;'b, 'a&gt;<div class=\"where\">where\n    'a: 'b,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.properties\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">properties</a>(self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = NodeProperty&lt;'a&gt;&gt; + 'b</h4></section></summary><div class=\"docblock\"><p>Returns an iterator over the available properties of the node</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.property\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">property</a>(self, name: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;NodeProperty&lt;'a&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to find the a property by its name</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.children\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">children</a>(self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = FdtNode&lt;'b, 'a&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns an iterator over the children of the current node</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reg\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">reg</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = MemoryRegion&gt; + 'a&gt;</h4></section></summary><div class=\"docblock\"><p><code>reg</code> property</p>\n<p>Important: this method assumes that the value(s) inside the <code>reg</code>\nproperty represent CPU-addressable addresses that are able to fit within\nthe platform’s pointer size (e.g. <code>#address-cells</code> and <code>#size-cells</code> are\nless than or equal to 2 for a 64-bit platform). If this is not the case\nor you’re unsure of whether this applies to the node, it is recommended\nto use the [<code>FdtNode::property</code>] method to extract the raw value slice\nor use the provided [<code>FdtNode::raw_reg</code>] helper method to give you an\niterator over the address and size slices. One example of where this\nwould return <code>None</code> for a node is a <code>pci</code> child node which contains the\nPCI address information in the <code>reg</code> property, of which the address has\nan <code>#address-cells</code> value of 3.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.raw_reg\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">raw_reg</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = RawReg&lt;'a&gt;&gt; + 'a&gt;</h4></section></summary><div class=\"docblock\"><p>Convenience method that provides an iterator over the raw bytes for the\naddress and size values inside of the <code>reg</code> property</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.compatible\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">compatible</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Compatible&lt;'a&gt;&gt;</h4></section></summary><div class=\"docblock\"><p><code>compatible</code> property</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cell_sizes\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">cell_sizes</a>(self) -&gt; CellSizes</h4></section></summary><div class=\"docblock\"><p>Cell sizes for child nodes</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.interrupt_parent\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">interrupt_parent</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;FdtNode&lt;'b, 'a&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Searches for the interrupt parent, if the node contains one</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.interrupt_cells\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">interrupt_cells</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p><code>#interrupt-cells</code> property</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.interrupts\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">interrupts</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; + 'a&gt;</h4></section></summary><div class=\"docblock\"><p><code>interrupts</code> property</p>\n</div></details></div></details>",0,"of::OfNode"],["<section id=\"impl-Copy-for-FdtNode%3C'b,+'a%3E\" class=\"impl\"><a href=\"#impl-Copy-for-FdtNode%3C'b,+'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'b, 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for FdtNode&lt;'b, 'a&gt;<div class=\"where\">where\n    'a: 'b,</div></h3></section>","Copy","of::OfNode"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10630]}