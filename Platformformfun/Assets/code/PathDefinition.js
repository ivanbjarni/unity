#pragma strict
var points : Transform[] = null;

function OnDrawGizmos() 
{			
	if(!points || points.length<2)
		return;
	
	for(var i=1; i<points.length;i++)
	{
		Gizmos.DrawLine(points[i-1].position, points[i].position);
	}
}