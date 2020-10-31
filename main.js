      <script type='text/javascript'>

        (function($){
        $(document).ready(function() {

        var str= PostTitle;
        var splitted = str.split(&#39; &#39;);
        var first = splitted[0]; //get first word
        var second = splitted[1]; //get second word
        var searchp = first + &#39; &#39; + second;

        $.ajax({
        method: &quot;GET&quot;,
        dataType: &quot;jsonP&quot;,
        url: &#39;https://en.wikipedia.org/w/api.php?action=query&amp;list=search&amp;srwhat=text&amp;format=json&amp;srprop=snippet&amp;srsearch=&#39;+searchp,

        success: function(response) {
        var s = response.query.search
        var snippetEl = &quot;&quot;;
        $.each(s, function(index, el) {
        snippetEl += el.snippet;
        })
        $(&quot;#WikipediaAPI&quot;).html(snippetEl);

        }
        });

        });

        })(jQuery);        
      </script>
