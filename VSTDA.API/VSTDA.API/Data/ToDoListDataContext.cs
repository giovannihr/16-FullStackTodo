using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using VSTDA.API.Models;

namespace VSTDA.API.Data
{
    public class ToDoListDataContext : DbContext
    {
        public ToDoListDataContext() : base("ToDoList")
        {

        }

        public IDbSet<ToDoEntry> ToDoEntries { get; set; }
    }
}