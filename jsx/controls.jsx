var Controls = React.createClass({
	shareCodeClicked: function() {
		console.log('clicked');
	},
	
	componentDidMount: function(){
		document.getElementById("generate-share-code").onclick = this.shareCodeClicked;
	},
	
	render: function() {
		return(
			<div className="component-wrapper">
				<div className="list-block">
					<ul>
						<li>
							<a href="#" id="generate-share-code" className="item-link list-button">Generate Share Code</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
  <Controls />,
  document.getElementById('controls')
);