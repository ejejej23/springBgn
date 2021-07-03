var sample = {
	name : 'sample',
	init : function() {
		this.beforeBind();
		this.bind();
	},
	beforeBind : function() {
	},
	bind : function() {
		$('#sample_sndBtn').on('click',sample.fn.sendValue1);
	},
	fn : {
		
		sendValue1: function() {
			var data = {'sampleStr' : $('#sampleTextInput').val()};
			$.ajax({
				url:'/begin/sendValue1',
				type: "POST" ,
		        async: true ,
		        dataType : "json",
		        data: JSON.stringify(data),
		        contentType: "application/json",//이부분에 유의
				success:function(data) {		
				}
			    ,error:function(e) {
			    	console.log(e.responseText);
			    }
			});
		},
		
	}
// fn
};