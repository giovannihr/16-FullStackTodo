using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VSTDA.API.Models
{
    public class ToDoEntry
    {
        //primary key
        public int ToDoEntryId { get; set; }
        
        //add aditional columns
        public string Text {get; set;}
        public string PriorityLevel { get; set; }
        public DateTime CreatedDate { get; set; }

    }
}