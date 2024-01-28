"use client"
export default function coursepage({params} : {params : {courseid : string}}){
	return (
		<div>
			<h1>Course page</h1>
			<h1>Course id : {params.courseid}</h1>
		</div>
	)
}